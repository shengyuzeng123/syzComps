<!--
  富文本组件
  此富文本组件是对tinymce-vue进行了二次封装，UI采用了element-ui，使用时要注意主项目的UI风格
  @time 2020-12-02
-->
<template>
  <div class="sh-rich-text">
    <!--tinymce-vue-->
    <Editor class="richTextEditor" :disabled="!isEditor" v-model="tplContent" :init="initConfig"></Editor>
    <!--工具条-->
    <div class="toolbar" v-if="toolbar || editor">
      <el-checkbox class="toolbar-item" v-model="isEditor" title="进入/关闭 编辑模式">启用编辑</el-checkbox>
      <el-checkbox class="toolbar-item" v-model="initConfig.paste_enable_default_filters" title="粘贴时将自动去除冗余样式，仅保留基本的结构"
                   :disabled="!isEditor">精简粘贴
      </el-checkbox>
      <el-button class="toolbar-item" type="text" title="去除HTML默认样式" @click="preFormatting" :loading="isFormatting"
                 :disabled="!isEditor">格式化文档样式
      </el-button>
    </div>
  </div>
</template>

<script>
// tinymce
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import Editor from "@tinymce/tinymce-vue";

// 引入tinymce插件
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/code";
import "tinymce/plugins/link";
import "tinymce/plugins/importcss";
import "tinymce/plugins/paste";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/hr";
import "tinymce/plugins/print";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/template";
import "@/assets/tinymce/plugins/lineheight/plugin"; // 设置行高插件

export default {
  name: "ShRichText",
  props: {
    // 内容
    content: {
      type: String,
      default: ''
    },
    // 是否默认开启编辑
    editor: {
      type: [Boolean, String, Object],
      default: false
    },
    // 是否开启底部工具栏
    toolbar: {
      type: [Boolean, String, Object],
      default: false
    }
  },
  components: {
    Editor
  },
  data() {
    return {
      show: true,
      // 内容
      tplContent: '',
      // 是否正在格式化
      isFormatting: false,
      // 是否可编辑
      isEditor: false,
      // 配置参数
      initConfig: {
        skin_url: "/static/tinymce/skins/ui/oxide",
        height: this.$attrs.height || 800,
        language_url: "/static/tinymce/zh_CN.js", //public目录下
        language: "zh_CN",
        plugins: "table lists link pagebreak searchreplace print paste template code lineheight importcss",
        font_formats: "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        toolbar: [
          `undo redo removeformat pagebreak| fontselect fontsizeselect formatselect lineheight forecolor backcolor | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify`,
          `bold italic underline strikethrough | table link searchreplace print | template code`,
        ],
        // 是否开启精简粘贴
        paste_enable_default_filters: false
      }
    };
  },
  computed: {},
  methods: {
    /**
     * 初始化
     */
    init() {
      if (this.content) {
        this.tplContent = this.content
      }
    },
    /**
     * 格式化文档
     */
    preFormatting() {
      if (!this.tplContent) {
        this.$message.warning('模板内容为空，无法格式化');
        return false;
      }
      this.$confirm('文档将被格式化，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.isFormatting = true;
        let formattingWrap = document.createElement('div');
        formattingWrap.innerHTML = this.tplContent;
        let ps = formattingWrap.getElementsByTagName('p');
        for (let i = 0; i < ps.length; i++) {
          ps[i].style.margin = "0"
        }
        this.tplContent = formattingWrap.innerHTML;
        let that = this;
        setTimeout(function () {
          that.isFormatting = false;
          that.$message.success('格式化成功');
        }, 1000)
      })
    }
  },
  watch: {
    tplContent(val) {
      this.$emit('update:content', val)
    },
    'initConfig.paste_enable_default_filters': function (val) {
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
        tinymce.init({})
      })
    }
  },
  created() {
    this.isEditor = !!this.editor
  },
  mounted() {
    this.init();
    tinymce.init({});
  }
};
</script>
<style scoped lang="less">
.sh-rich-text {
  width: 100%;

  .toolbar {
    background: #f4f4f4;
    border: 1px solid #ccc;
    border-top: none;
    box-sizing: border-box;
    padding: 0 18px;

    .toolbar-item {
      position: relative;

      &:not(:last-child) {
        margin-right: 28px;

        &:after {
          content: '';
          position: absolute;
          right: -15px;
          top: calc(50% - 7px);
          height: 16px;
          width: 1px;
          border-right: 1px solid #d2d2d2;
        }
      }
    }
  }
}

/deep/ .tox .tox-statusbar {
  display: none;
}
</style>