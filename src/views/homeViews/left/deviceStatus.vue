<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>设备运维现状</span>
    </div>
    <div class="statusInfo">
      <div class="statusItem">
        <div class="unit">
          <p>正常运行</p>
          <p>
            <span>{{ getRate("normal-operation") }}%</span>
            <span>{{ getVal("normal-operation") }}台</span>
          </p>
        </div>
        <div class="progressBar">
          <div
            class="progress"
            :style="{ width: `${getRate('normal-operation')}%` }"
          ></div>
        </div>
      </div>
      <div class="statusItem abnormal">
        <div class="unit">
          <p>现场处理</p>
          <p>
            <span>{{ getRate("onsite-handling") }}%</span>
            <span>{{ getVal("onsite-handling") }}台</span>
          </p>
        </div>
        <div class="progressBar">
          <div
            class="progress"
            :style="{ width: `${getRate('onsite-handling')}%` }"
          ></div>
        </div>
      </div>
      <div class="statusItem error">
        <div class="unit">
          <p>异常警告</p>
          <p>
            <span>{{ getRate("failure-occurs") }}%</span>
            <span>{{ getVal("failure-occurs") }}台</span>
          </p>
        </div>
        <div class="progressBar">
          <div
            class="progress"
            :style="{ width: `${getRate('failure-occurs')}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    monitorTotal() {
      if (!this.data?.monitorRunState) return 0;
      return Object.keys(this.data.monitorRunState).reduce(
        (acc, curr) => acc + this.data.monitorRunState?.[curr],
        0
      );
    },
  },
  methods: {
    getRate(key) {
      return parseInt(
        (this.data.monitorRunState?.[key] / this.monitorTotal) * 100
      );
    },
    getVal(key) {
      return this.data.monitorRunState?.[key];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .title {
    width: 100%;
    height: vh(41);
    background: url(../../../assets/image/title_bg.png) top left no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;

    img {
      width: vw(20);
      height: vh(20);
      margin-left: vw(20);
    }

    span {
      font-size: vw(22);
      color: #fff;
      line-height: vh(25);
      letter-spacing: vw(2);
      text-align: left;
      font-style: normal;
      margin-left: vw(20);
    }
  }

  .statusInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: vh(20) vw(20);

    .statusItem {
      width: 100%;

      .unit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        p:nth-of-type(1) {
          font-weight: 400;
          font-size: vw(18);
          color: #fff;
          line-height: vh(25);
          text-align: left;
          font-style: normal;
        }

        p:nth-of-type(2) {
          font-size: vw(29);
          color: #fff;
          line-height: vh(23);
          letter-spacing: vw(2);
          text-align: left;
          font-style: normal;
        }
      }

      .progressBar {
        width: 100%;
        height: vh(6);
        background: rgba(0, 91, 199, 0.16);
        border-radius: vw(4);
        margin-top: vh(15);

        .progress {
          background: linear-gradient(
            270deg,
            #00d2ff 0%,
            #0076ff 26%,
            rgba(0, 89, 255, 0.24) 100%
          );
          height: vh(6);
          border-radius: vw(4);
          transition: width 0.5s ease;
        }
      }
      &.abnormal {
        margin-top: vh(32);
        .progressBar .progress {
          background: linear-gradient(
            270deg,
            #fff000 0%,
            #ffb300 26%,
            rgba(255, 127, 0, 0.24) 100%
          );
        }
      }
      &.error {
        margin-top: vh(32);
        .progressBar .progress {
          background: linear-gradient(
            270deg,
            #ef8377 0%,
            #e35a4c 26%,
            rgba(255, 127, 0, 0.24) 100%
          );
        }
      }
    }
  }
}
</style>
