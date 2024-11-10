<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>设备告警</span>
    </div>
    <div class="alarmList">
      <ul>
        <li
          :class="{
            alarmFault: item.status === 4,
            // alarmTime: idx === 1,
            alarmNotice: item.status === 3,
          }"
          v-for="(item, idx) in monitorWarnState"
          :key="idx"
        >
          <div class="alarmItem">
            <p>{{ item.monitorId }}</p>
            <p>{{ item.msg.msg }}</p>
            <p>{{ item.errorTime }}</p>
          </div>
        </li>
      </ul>
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
    monitorWarnState() {
      return this.data?.monitorWarnState || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  // margin-top: vh(56);

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

  .alarmList {
    margin-top: vh(36);
    height: vh(800);
    // height: 100%;
    overflow-y: auto;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      li {
        width: vw(280);
        height: vh(90);
        display: flex;
        align-items: center;
        padding-left: vw(94);
        margin-bottom: vh(14);
        &.alarmNotice {
          background: url(../../../assets/image/alarm_notice.png) left top
            no-repeat;
          background-size: 100%, 100%;
        }
        &.alarmFault {
          background: url(../../../assets/image/alarm_fault.png) left top
            no-repeat;
          background-size: 100%, 100%;
        }
        &.alarmTime {
          background: url(../../../assets/image/alarm_time.png) left top
            no-repeat;
          background-size: 100%, 100%;
        }
        .alarmItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          p:nth-of-type(1) {
            font-weight: 600;
            font-size: vw(16);
            color: #fff;
            line-height: vh(22);
            text-align: left;
            font-style: normal;
          }

          p:nth-of-type(2) {
            font-size: vw(14);
            color: #fff;
            line-height: vh(22);
            text-align: left;
            font-style: normal;
            text-transform: none;
          }

          p:nth-of-type(3) {
            font-weight: 600;
            font-size: vw(14);
            color: #fff;
            line-height: vh(20);
            text-align: left;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
