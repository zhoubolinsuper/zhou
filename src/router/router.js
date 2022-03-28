import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //依赖
// 定义组件
import MyHome from "../components/MyHome";
import MyAbout from "../components/MyAbout";
// 配置路由规则
let routes = [
  { path: "/home", component: MyHome, name: "MyHome" },
  { path: "/about", component: MyAbout, name: "MyAbout" },
];
// 实例化路由
let router = new VueRouter({
  routes,
});
export default router;
