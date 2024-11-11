<template>
  <div class="dataAnalysis">
    <div class="messageList">
      <ul>
        <li>
          <span class="label">旧密码：</span>
          <input type="text" class="inp" v-model="oldPassword" />
        </li>
        <li>
          <span class="label">新密码：</span>
          <input type="text" class="inp" v-model="newPassword" />
        </li>
        <li>
          <span class="label">确认新密码：</span>
          <input type="text" class="inp" v-model="confirmNewPassword" />
        </li>
      </ul>
    </div>
    <div class="btns">
      <div class="btn" @click="doSubmit()">完成</div>
    </div>
  </div>
</template>

<script>
import { changePassword } from "@/api/login";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
  },
  methods: {
    doSubmit() {
      if (!this.oldPassword) {
        this.$message({
          message: "请输入旧密码",
          type: "warning",
        });
        return;
      }
      if (!this.newPassword) {
        this.$message({
          message: "请输入新密码",
          type: "warning",
        });
        return;
      }
      if (this.newPassword !== this.confirmNewPassword) {
        this.$message({
          message: "两次密码不一致",
          type: "warning",
        });
        return;
      }
      changePassword({
        username: localStorage.getItem("username"),
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      });
    },
  },
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
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
      width: vw(168);
      height: vh(40);
      background-size: 100% 100%;
      text-align: center;
      line-height: vh(40);
      font-size: 18px;
      color: #fff;
      letter-spacing: vw(1);
      font-style: normal;

      &:nth-of-type(1) {
        background: url(../../../assets/image/cancel_bg.png) top left no-repeat;
        margin-right: vw(122);
      }

      &:nth-of-type(2) {
        background: url(../../../assets/image/add_bg.png) top left no-repeat;
      }
    }
  }
}
</style>
