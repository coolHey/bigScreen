import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
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
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "homeView",
        meta: {
          title: "首页",
        },
        component: () => import("../views/homeViews/indexView.vue"),
      },
      {
        // 设备质保期
        path: "/equipmentShelfLife",
        name: "equipmentShelfLife",
        component: () => import("../views/equipmentShelfLife/indexView.vue"),
        meta: {
          title: "设备质保期",
        },
      },
      {
        // 客户档案管理
        path: "/customerProfile",
        name: "customerProfile",
        component: () => import("../views/customerProfile/indexView.vue"),
        meta: {
          title: "客户档案管理",
        },
      },
      {
        // 报表管理
        path: "/reportManage",
        name: "reportManage",
        component: () => import("../views/reportManage/indexView.vue"),
        meta: {
          title: "报表管理",
        },
      },
      {
        // 设备参数详情
        path: "/equipmentParameters",
        name: "equipmentParameters",
        component: () => import("../views/equipmentParameters/indexView.vue"),
        meta: {
          title: "设备参数详情",
        },
      },
      {
        // 设备详情列表
        path: "/deviceDetail",
        name: "deviceDetail",
        component: () => import("../views/deviceDetail/indexView.vue"),
        meta: {
          title: "设备详情列表",
        },
      },
      {
        // 设备运行数据
        path: "/runningData-1",
        name: "runningData-1",
        component: () => import("../views/runningData-1/indexView.vue"),
        meta: {
          title: "设备运行数据-干燥机",
        },
      },
      {
        // 设备运行数据
        path: "/runningData-2",
        name: "runningData-2",
        component: () => import("../views/runningData-2/indexView.vue"),
        meta: {
          title: "设备运行数据-离心机",
        },
      },
      {
        // 售后
        path: "/equipmentService",
        name: "equipmentService",
        component: () => import("../views/equipmentService/indexView.vue"),
        meta: {
          title: "售后",
        },
      },
      {
        // 售后详情
        path: "/equipmentServiceDetail",
        name: "equipmentServiceDetail",
        component: () =>
          import("../views/equipmentServiceDetail/indexView.vue"),
        meta: {
          title: "售后详情",
        },
      },
      {
        // 日志/修改密码/消息
        path: "/systemManage",
        name: "systemManage",
        component: () => import("../views/systemManage/indexView.vue"),
        meta: {
          title: "日志",
        },
      },
      // {
      //   // 报警查询
      //   path: "/alarmQuery",
      //   name: "alarmQuery",
      //   component: () => import("../views/alarmQuery/indexView.vue"),
      //   meta: {
      //     title: "报警查询",
      //   },
      // },
    ],
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


// router.beforeEach((to, from, next) => {
//   console.log(localStorage.getItem('token'));
//   if (!localStorage.getItem('token')) {
//     // router.push('/login')
//     next('/login')
//   } else {
//     next(); // 允许访问
//   }
// });

export default router;
