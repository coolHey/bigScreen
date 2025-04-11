<template>
  <div class="leftView">
    <div class="title">
      <span>离心机参数</span>
      <span>{{ data.createTime }}</span>
    </div>
    <div class="content3 content">
      <ul>
        <li>
          <span>运行模式</span>
          <span>{{ data.c1 || "-" }}</span>
        </li>
        <li>
          <span>运行速度</span>
          <span>{{ data.c2 || "-" }}</span>
        </li>
        <li>
          <span>主机频率</span>
          <span>{{ data.c3 || "-" }}</span>
        </li>
      </ul>
    </div>
    <div class="content2 content">
      <ul>
        <li>
          <span>主机电流</span>
          <span>{{ data.c4 || "-" }}</span>
        </li>
        <li>
          <span>含氧量</span>
          <span>{{ data.c5 || "-" }}</span>
        </li>
      </ul>
    </div>
    <div class="content3 content">
      <ul>
        <li>
          <span>振动值</span>
          <span>{{ data.c6 || "-" }}</span>
        </li>
        <li>
          <span>主机转速</span>
          <span>{{ data.c7 || "-" }}</span>
        </li>
        <li>
          <span>布料频率</span>
          <span>{{ data.c8 || "-" }}</span>
        </li>
      </ul>
    </div>
    <div class="content2 content">
      <ul>
        <li>
          <span>布料电流</span>
          <span>{{ data.c9 || "-" }}</span>
        </li>
        <li>
          <span>暂定</span>
          <span>{{ data.c10 || "-" }}</span>
        </li>
      </ul>
    </div>
    <!-- <div class="content2 content">
      <ul>
        <li>
          <span>温度</span>
          <span>跑的飞快</span>
        </li>
        <li>
          <span>震动值</span>
          <span>跑的飞快</span>
        </li>
      </ul>
    </div> -->
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
};
</script>

<style scoped lang="scss">
.leftView {
  margin-top: vh(20);
  .title {
    width: vw(390);
    height: vh(38);
    background: url(../../assets/image/runningData_titleBg.png) top left
      no-repeat;
    background-size: 100% 100%;
    font-size: vw(22);
    color: #fff;
    line-height: vh(38);
    letter-spacing: vw(2);
    font-style: normal;
    padding-left: vw(40);
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-child(2) {
      font-size: vw(18);
    }
  }
  .content {
    margin-top: vh(19);
    padding: vh(32) vw(60) vh(42) vw(69);
    &.content3 {
      width: vw(290);
      height: vh(136);
      background: url(../../assets/image/threeRow_bg.png) top left no-repeat;
      background-size: 100% 100%;
    }
    &.content1 {
      width: vw(290);
      height: vh(28);
      background: url(../../assets/image/oneRow_bg.png) top left no-repeat;
      background-size: 100% 100%;
    }
    &.content2 {
      width: vw(290);
      height: vh(82);
      background: url(../../assets/image/twoRow_bg.png) top left no-repeat;
      background-size: 100% 100%;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
        font-size: vw(20);
        color: #fff;
        line-height: vh(28);
        text-shadow: 0px 0px vw(8) #0094ff;
        font-style: normal;
      }
    }
  }
}
</style>
