<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './views/Home.vue'

export default {
  name: "App",
  components: {
    // Home
  }
}
</script>

<style>
#app {
  /* background-color: rgb(235, 180, 180); */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  cursor: default;
}
</style>
