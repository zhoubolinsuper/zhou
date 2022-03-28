// 项目的入口文件
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "./router/router";

let vm = new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
console.log(vm);
