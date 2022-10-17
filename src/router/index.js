import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layouts";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"), // 异步加载
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
