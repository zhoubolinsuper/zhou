<template>
  <div id="app">
    <h3>hello</h3>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
    <!--路由出口组件 -->
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "APP",
  created() {
    // axios.get("/api").then((res) => console.log(res.data));
  },
};
</script>
