<template>
  <div class="home">
    <!-- <div style="font-family:楷体">测试</div> -->
    <!-- <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar> -->
    <Editor id="tinymce" v-model="tinymceHtml" :init="initEditor"></Editor>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getVideoList } from "../api/api";

// tinymce
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import Editor from "@tinymce/tinymce-vue";

// 引入tinymce插件
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/paste";
import "tinymce/plugins/autosave";
import "tinymce/plugins/save";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/print";
import "tinymce/plugins/searchreplace";
import "@/assets/tinymce/plugins/lineheight/plugin"; // 设置行高插件

export default {
  name: "home",
  data() {
    return {
      isClear: false,
      detail: "",
      tinymceHtml: "",
      initEditor: {
        skin_url: "/static/tinymce/skins/ui/oxide",
        height: 800,
        language_url: "/static/tinymce/zh_CN.js", //public目录下
        language: "zh_CN",
        images_upload_url: true,
        paste_data_images: true,
        images_upload_handler: function(blobInfo, success, failure) {},
        plugins: "table imagetools image paste link autosave lists save pagebreak print searchreplace lineheight",
        font_formats: "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        toolbar: [
          `undo redo save restoredraft removeformat pagebreak| fontselect fontsizeselect forecolor backcolor | numlist bullist | bold italic underline strikethrough outdent indent | alignleft aligncenter alignright alignjustify`,
          `table image link blockquote searchreplace print lineheight`
        ],
        save_onsavecallback(){
          alert('123')
        }
      }
    };
  },
  components: {
    EditorBar,
    Editor
  },
  computed: {
    fixStr() {},
    ...mapState("user/", ["age", "name"])
  },
  methods: {
    change(val) {
      // console.log(val)
    },
    ...mapActions("user/", ["changeNameActions"])
  },
  mounted() {
    tinymce.init({});
  }
};
</script>
