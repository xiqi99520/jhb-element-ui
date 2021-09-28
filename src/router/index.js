import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "JHBMerchantStatistics",
    component: () =>
      import("../views/test/index.vue"),
  },
  {
    path: "/button",
    name: "ElButton",
    component: () =>
      import("../views/button/index.vue"),
  },
  {
    path: "/link",
    name: "ElLink",
    component: () =>
      import("../views/link/index.vue"),
  },
  {
    path: "/radio",
    name: "ElRadio",
    component: () =>
      import("../views/radio/index.vue"),
  },
  {
    path: "/checkbox",
    name: "ElCheckbox",
    component: () =>
      import("../views/checkbox/index.vue"),
  },
  {
    path: "/input",
    name: "ElInput",
    component: () =>
      import("../views/input/index.vue"),
  },
  {
    path: "/inputNumber",
    name: "ElInputNumber",
    component: () =>
      import("../views/inputNumber/index.vue"),
  },
  {
    path: "/select",
    name: "ElSelect",
    component: () =>
      import("../views/select/index.vue"),
  },
  {
    path: "/time",
    name: "Eltime",
    component: () =>
      import("../views/time/index.vue"),
  },
  {
    path: "/alert",
    name: "ElAlert",
    component: () =>
      import("../views/alert/index.vue"),
  },
  {
    path: "/tab",
    name: "ElTab",
    component: () =>
      import("../views/tab/index.vue"),
  },
  {
    path: "/result",
    name: "ElResult",
    component: () =>
      import("../views/result/index.vue"),
  },
  {
    path: "/tag",
    name: "Eltag",
    component: () =>
      import("../views/tag/index.vue"),
  },
  {
    path: "/switch",
    name: "ElSwitch",
    component: () =>
      import("../views/switch/index.vue"),
  },
  {
    path: "/pagination",
    name: "ElPagination",
    component: () =>
      import("../views/pagination/index.vue"),
  },
];

const router = new VueRouter({
  routes
})

export default router
