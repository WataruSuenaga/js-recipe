<template>
  <h1>Vueカウンター</h1>
  <div>🔥{{ countNumber }}{{ nabeatu }}🔥</div>
  <button v-on:click="countUp">+1</button>
</template>

<script>
export default {
  data() {
    return {
      countNumber: 0,
    }
  },
  methods: {
    countUp: function () {
      this.countNumber += 1
    },
  },
  computed: {
    nabeatu: function () {
      if (this.countNumber % 3 === 0) {
        return "!!!"
      } else {
        return ""
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
