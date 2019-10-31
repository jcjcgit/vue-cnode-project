<template>
  <div id="app">
    <Header></Header>
    <router-view name="main"></router-view>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
import "./assets/iconfont.js";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  border: none;
}

body {
  background-color: #ccc;
}
</style>
