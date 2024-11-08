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
      <data-analysis-view></data-analysis-view>
    </div>
  </div>
</template>

<script>
import dataAnalysisView from "./reportView/dataAnalysisView.vue";
export default {
  components: {
    dataAnalysisView,
  },
  data() {
    return {
      menuList: [
        {
          label: "数据对比分析",
          id: 1,
        },
        {
          label: "故障类型分析",
          id: 2,
        },
        {
          label: "售后服务信息",
          id: 3,
        },
        {
          label: "设备运行报告",
          id: 4,
        },
      ],
      activeMenu: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      value1: "",
    };
  },
  methods: {
    changeMenu(i) {
      console.log(i);
      this.activeMenu = i;
    },
    handleClick(row) {
      console.log(row);
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
