<template>
  <div class="dataAnalysis">
    <div class="messageList">
      <ul>
        <li>
          <span class="label">旧密码：</span>
          <input type="text" class="inp" />
        </li>
        <li>
          <span class="label">新密码：</span>
          <input type="text" class="inp" />
        </li>
        <li>
          <span class="label">确认新密码：</span>
          <input type="text" class="inp" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.dataAnalysis {
  .messageList {
    height: vh(800);
    overflow-y: auto;
    ul {
      display: flex;
      flex-direction: column;
      li {
        width: vw(1468);
        height: vh(80);
        background: linear-gradient(
          270deg,
          rgba(0, 113, 255, 0) 0%,
          rgba(33, 55, 89, 0.2) 52%,
          rgba(0, 109, 255, 0) 100%
        );
        backdrop-filter: blur(vw(2));
        padding: 0 vw(40) 0 vw(28);
        display: flex;
        align-items: center;
        margin-bottom: vh(20);
        .label {
          font-weight: 400;
          font-size: vw(16);
          color: #d1dfe9;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
          width: vw(100);
        }

        .inp {
          width: vw(360);
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
      }
    }
  }
}
</style>
