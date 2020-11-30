<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Class",
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return `${this.x}${this.y}`
      }

      get name() {
        return 'get'
      }

      set name(value) {
        console.log('set' + value)
      }
    }

    class Son extends Point {
      constructor(x, y, z) {
        super(x,y)
        this.z = z
      }
    }

    // let p = new Point(1, 2)
    // console.log(Point.toString)
    // let s = new Son(1,2,3)
    // console.log(s.toString)
  }
}
</script>

<style scoped>

</style>