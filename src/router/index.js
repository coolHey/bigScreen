import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "homeView",
        component: () => import("../views/homeViews/indexView.vue"),
      },
      {
        // 设备质保期
        path: "/equipmentShelfLife",
        name: "equipmentShelfLife",
        component: () => import("../views/equipmentShelfLife/indexView.vue"),
      },
      {
        // 客户档案管理
        path: "/customerProfile",
        name: "customerProfile",
        component: () => import("../views/customerProfile/indexView.vue"),
      },
      {
        // 报表管理
        path: "/reportManage",
        name: "reportManage",
        component: () => import("../views/reportManage/indexView.vue"),
      },
      {
        // 设备参数详情
        path: "/equipmentParameters",
        name: "equipmentParameters",
        component: () => import("../views/equipmentParameters/indexView.vue"),
      },
      {
        // 设备详情列表
        path: "/deviceDetail",
        name: "deviceDetail",
        component: () => import("../views/deviceDetail/indexView.vue"),
      },
      {
        // 设备运行数据
        path: "/runningData",
        name: "runningData",
        component: () => import("../views/runningData/indexView.vue"),
      },
      {
        // 售后
        path: "/equipmentService",
        name: "equipmentService",
        component: () => import("../views/equipmentService/indexView.vue"),
      },
      {
        // 日志/修改密码/消息
        path: "/systemManage",
        name: "systemManage",
        component: () => import("../views/systemManage/indexView.vue"),
      },
      {
        // 报警查询
        path: "/alarmQuery",
        name: "alarmQuery",
        component: () => import("../views/alarmQuery/indexView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "loginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/login.vue"),
  },
  {
    path: "/test",
    name: "testView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/testView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
