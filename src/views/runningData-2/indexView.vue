<template>
  <div class="container">
    <div class="filter">
      <ul>
        <li>
          <span class="label">设备ID：</span>
          <input
            type="text"
            v-model="deviceId"
            placeholder="请输入"
            class="inp"
          />
        </li>
        <li>
          <span class="label">质保日前：</span>
          <div class="datePick">
            <el-date-picker
              v-model="time"
              value-format="YYYY-MM-DD HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </div>
        </li>
        <li>
          <div class="addBtn" @click="handleQuery">查询</div>
        </li>
      </ul>
    </div>
    <div class="main">
      <left-view :data="detailData"></left-view>
      <content-view :data="lineData"></content-view>
      <right-view
        :data="currentData?.[0] || {}"
        :time="currentDateTime"
      ></right-view>
    </div>
  </div>
</template>

<script>
import leftView from "./leftView.vue";
import contentView from "./contentView.vue";
import rightView from "./rightView.vue";
import { getListData, getAutoData } from "@/api/runningData";
import { ElMessage } from "element-plus";
export default {
  components: {
    leftView,
    contentView,
    rightView,
  },
  data() {
    return {
      // value1: "",
      region: "",
      showAdd: false,
      deviceId: "monitor_1", // 设备id
      time: "",
      detailData: {},
      lineData: {},
      currentData: null,
      timer: null,
    };
  },
  mounted() {
    // this.getData()
    this.getCurrentDateTime();
    this.handleQuery();
    this.getInfoData();
    this.timer = setInterval(() => {
      this.getInfoData();
    }, 5000);
  },
  methods: {
    getInfoData() {
      // getAutoData({ id: this.deviceId }).then(res => {
      //   if (res.code == 200) {
      //     this.detailData = res.data
      //   } else {
      //     alert(res.message)
      //   }
      // })
      getAutoData({ id: this.deviceId }, { type: "centrifuge" }).then((res) => {
        if (res.code == 200) {
          this.detailData = res.data;
        } else {
          ElMessage.error(res.message);
        }
      });
    },

    getData(beginTime, endTime, key) {
      // let nowTime = this.getCurrentDateTime();
      // // getListData({ id: this.deviceId, time: this.time || nowTime }).then(res => {
      // //   if (res.code == 200) {
      // //     this.detailData = res.data.length && res.data[0]
      // //   } else {
      // //     alert(res.message)
      // //   }
      // // })
      getListData(this.deviceId, {
        type: "centrifuge",
        beginTime,
        endTime,
      }).then((res) => {
        if (res.code == 200) {
          this[key] = res.data.length && res.data;
        } else {
          ElMessage.error(res.message);
        }
      });
    },

    getCurrentDateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      this.currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      // this.getData("2025-03-06 00:00:00", "2025-03-06 00:00:00", "currentData");
      this.getData(this.currentDateTime, this.currentDateTime, "currentData");
    },

    handleQuery() {
      // clearInterval(this.timer);
      // if (this.deviceId) {
      //   this.getInfoData();
      //   this.timer = setInterval(() => {
      //     this.getInfoData();
      //   }, 5000);
      // } else {
      //   this.detailData = {};
      // }
      if (this.time.length) {
        this.getData(this.time[0], this.time[1], "lineData");
      }
    },
  },
  beforeMount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: vh(35) vw(80) vh(64) vw(80);
  position: relative;

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        margin-right: vw(96);

        .label {
          font-weight: 400;
          font-size: vw(16);
          color: #d1dfe9;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
        }

        .inp {
          width: vw(221);
          height: vh(22);
          background: rgba(0, 112, 255, 0.1);
          box-shadow: inset 0px 0px vh(8) 0px rgba(0, 130, 255, 0.32);
          font-weight: 400;
          font-size: vw(16);
          color: #5e7ea6;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
          padding: vh(8) vh(12);
        }

        .datePick {
          width: vw(245);
          height: vh(38);

          :deep(.el-input) {
            width: 100%;
            height: 100%;
            border: none;
            background: rgba(0, 112, 255, 0.1);

            .el-input__wrapper {
              background: rgba(0, 112, 255, 0.1);
              box-shadow: inset 0px 0px vh(8) 0px rgba(0, 130, 255, 0.32);
              font-weight: 400;
              font-size: vw(16);
              color: #5e7ea6;
              line-height: vh(22);
              text-align: left;
              font-style: normal;
              padding: vh(8) vh(12);
            }
          }
        }
      }
    }

    .addBtn {
      background: url(../../assets/image/add_bg.png) top left no-repeat;
      background-size: 100% auto;
      width: vw(170);
      height: vh(42);
      text-align: center;
      line-height: vh(42);
      font-size: vw(16);
      color: #fff;
      letter-spacing: vw(2);
      font-style: normal;
      cursor: pointer;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
  }
}
</style>
