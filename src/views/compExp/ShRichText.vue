<template>
  <div>
    <sh-rich-text
        :content.sync="config.content"
        :toolbar="config.toolbar"
        :editor="config.editor"
        :height="config.height"
    ></sh-rich-text>
  </div>
</template>

<script>
export default {
  name: "CompsShRichText",
  data() {
    return {
      config: {
        content: '',
        toolbar: true,
        editor: true,
        height:400
      }
    }
  }
}
</script>

<style scoped>

</style>