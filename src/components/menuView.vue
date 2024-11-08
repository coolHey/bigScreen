<template>
  <div class="menuView">
    <div class="collapse" @click="isCollapse = !isCollapse">
      <el-icon v-show="isCollapse"><Expand /></el-icon>
      <el-icon v-show="!isCollapse"><Fold /></el-icon>
    </div>
    <el-menu default-active="1" :popper-offset="100" class="el-menu-vertical-demo" @open="handleOpen"
      @close="handleClose" :collapse="isCollapse">
      <template v-for="(item, index) in menuList" :key="index">
        <el-sub-menu :index="item.value" v-if="item.children.length">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item v-for="(e, i) in item.children" :key="e.id" :index="e.value" @click="handlePath(e)">{{ e.label }}</el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.value" v-else @click="handlePath(item)">
          <el-icon><Menu /></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      menuList: [
      {
          label: "首页",
          value: 10,
          path: "/home",
          children: [],
        },
        {
          label: "设备管理",
          value: 1,
          path: "",
          children: [
            {
              label: "设备运行数据",
              value: 11,
              path: "/runningData",
              children: [],
            },
            {
              label: "设备详情列表",
              value: 12,
              path: "/deviceDetail",
              children: [],
            },
            {
              label: "设备参数详情",
              value: 13,
              path: "/equipmentParameters",
              children: [],
            },
            {
              label: "设备质保期",
              value: 14,
              path: "/equipmentShelfLife",
              children: [],
            },
          ],
        },
        {
          label: "数据监控",
          value: 2,
          path: "",
          children: [],
        },
        {
          label: "报警信息",
          value: 3,
          path: "/alarmQuery",
          children: [],
        },
        {
          label: "远程运维",
          value: 4,
          path: "",
          children: [],
        },
        {
          label: "登陆日志",
          value: 5,
          path: "/systemManage",
          children: [],
        },
        {
          label: "消息通知",
          value: 6,
          path: "/systemManage",
          children: [],
        },
        {
          label: "修改密码",
          value: 7,
          path: "",
          children: [],
        },
        {
          label: "报表管理",
          value: 8,
          path: "/reportManage",
          children: [],
        },
        {
          label: "客户档案管理",
          value: 9,
          path: "/customerProfile",
          children: [],
        },
        {
          label: "售后管理",
          value: 11,
          path: "/equipmentService",
          children: [],
        },
      ],
    };
  },
  methods: {
    handlePath(item) {
      this.$router.push({
        path: item.path
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
};
</script>

<style lang="scss" scoped>
.menuView {
  // width: vw(320);
  height: vh(990);
  overflow-y: auto;
  background: rgba(21, 36, 65, 0.64);
  backdrop-filter: blur(vw(8));
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  top: vh(80);

  .collapse {
    color: #fff;
    margin-top: vh(20);
    margin-left: vw(20);
    cursor: pointer;
  }

  .el-menu-vertical-demo {
    margin-top: vh(0);
  }

  :deep(.el-menu) {
    border: none;
    background: transparent;

    .el-menu-item:hover,
    .el-sub-menu__title:hover {
      background: transparent;
    }


    // .el-menu-item {
    //   padding-left: vw(80) !important;
    // }

    .el-menu-item-group__title:hover {
      background: transparent;
    }


    .el-menu-item-group__title,
    .el-menu-item,
    .el-sub-menu__title {
      font-weight: 400;
      font-size: vw(20);
      color: #FFFFFF;
      line-height: vh(28);
      // height: vh(80);
      text-align: left;

      &.is-active {
        color: #409eff !important;
      }
    }


    // span {
    //   font-weight: 400;
    //   font-size: vw(20);
    //   color: #FFFFFF;
    //   line-height: vh(28);
    //   text-align: left;
    // }
  }
}
</style>
