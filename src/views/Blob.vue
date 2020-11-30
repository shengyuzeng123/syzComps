<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "Blob",
  mounted() {
    let hello = new Uint8Array([1,2,3,4,5])
    console.log(hello)
  let myblob = new Blob([hello],{type:'text/plain'})
    console.log(myblob.stream())
  }
}
</script>

<style scoped>

</style>