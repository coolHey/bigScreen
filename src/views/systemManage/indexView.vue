<template>
  <div class="container">
    <div class="menuList">
      <ul>
        <li
          @click="changeMenu(idx)"
          v-for="(item, idx) in menuList"
          :key="idx"
          :class="{ active: idx === activeMenu }"
        >
          <span>{{ item.label }}</span>
        </li>
        <!-- <li class="active">
          <span>数据对比分析</span>
        </li> -->
      </ul>
    </div>
    <div class="main">
      <component :is="menuList[activeMenu].component"></component>
    </div>
  </div>
</template>

<script>
import messageNotificationView from "./reportView/messageNotificationView.vue";
import loginLogView from "./reportView/loginLogView.vue";
import changePasswordView from "./reportView/changePasswordView.vue";
export default {
  components: {
    messageNotificationView,
    loginLogView,
    changePasswordView,
  },
  data() {
    return {
      menuList: [
        {
          label: "消息通知",
          id: 1,
          component: "messageNotificationView",
        },
        {
          label: "登陆日志",
          id: 2,
          component: "loginLogView",
        },
        {
          label: "修改密码",
          id: 3,
          component: "changePasswordView",
        },
      ],
      activeMenu: 0,
    };
  },
  watch: {
    $route(to) {
      this.activeMenu = to.query.activeMenu || 0;
    },
  },
  methods: {
    changeMenu(i) {
      this.activeMenu = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: vh(40) vw(40);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menuList {
    width: vw(204);
    height: vh(920);
    background: url(../../assets/image/report_menu.png) top left no-repeat;
    background-size: 100% 100%;

    ul {
      margin-top: vh(20);
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: vw(204);
        height: vh(60);
        font-size: vw(20);
        color: #80a3bb;
        letter-spacing: vw(2);
        font-style: normal;
        cursor: pointer;
        span {
          display: inline-block;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: vh(60);
        }
        &.active {
          color: #fff;
          text-shadow: 0px 0px vw(8) #2383ff;
          font-style: normal;
          position: relative;
          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
          &::before {
            content: "";
            width: vw(220);
            height: vh(60);
            position: absolute;
            left: 0;
            top: 0;
            background: url(../../assets/image/report_menu_active.png) top left
              no-repeat;
            background-size: 100% 100%;
            z-index: 0;
          }
        }
      }
    }
  }

  .main {
    width: vw(1536);
    height: vh(840);
    padding: vh(40) vw(40);
    background: url(../../assets/image/report_main.png) top left no-repeat;
    background-size: 100% 100%;
  }
}
</style>
