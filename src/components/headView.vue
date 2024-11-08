<template>
  <div class="container">
    <div class="time">{{ timeDate }}</div>
    <h2 class="title">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "原料药生产数据分析平台",
    },
  },
  data() {
    return {
      timer: null,
      timeDate: null,
    };
  },
  created() {
    this.timeDate = this.getDate();
    this.timer = setInterval(() => {
      this.timeDate = this.getDate();
    }, 1000);
  },
  methods: {
    getDate() {
      let y = new Date().getFullYear();
      let m = new Date().getMonth() + 1;
      let d = new Date().getDate();
      let h = new Date().getHours();
      let mm = new Date().getMinutes();
      let s = new Date().getSeconds();
      return `${y}-${m}-${d}  ${h}:${mm}:${s}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: url(../assets/image/head_bg.png) no-repeat top left;
  background-size: 100% auto;
  width: 100%;
  height: vh(85);
  position: relative;

  .time {
    font-weight: bold;
    font-size: vh(24);
    color: #fff;
    text-align: left;
    font-style: normal;
    line-height: vh(85);
    padding-left: vw(40);
  }

  .title {
    font-size: vh(36);
    color: #fff;
    line-height: vh(40);
    letter-spacing: vw(4);
    text-shadow: 0px vh(4) vh(8) rgba(0, 12, 31, 0.5);
    text-align: left;
    font-style: normal;
    text-transform: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
