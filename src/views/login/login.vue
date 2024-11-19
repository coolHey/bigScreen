<template>
  <div class="container">
    <div class="main">
      <div class="title">
        <h2>原料药生产数据分析平台</h2>
      </div>
      <div class="form">
        <div class="username item">
          <div class="icon">
            <el-icon class="elIcon" style="width: 100%;height: 100%;">
              <User />
            </el-icon>
          </div>
          <div class="inp">
            <input type="text" v-model="username" />
          </div>
        </div>
        <div class="password item">
          <div class="icon">
            <el-icon class="elIcon" style="width: 100%;height: 100%;">
              <Tools />
            </el-icon>
          </div>
          <div class="inp">
            <input type="password" v-model="password" />
          </div>
        </div>
        <!-- <div class="code">
          <div class="code_item">
            <div class="icon"></div>
            <div class="inp">
              <input type="text" v-model="code" />
            </div>
          </div>
          <div class="code_img">
            <img src="http://146.56.215.178:9999/user/code" alt="" />
          </div>
        </div> -->
        <div class="btn_box">
          <div class="conform_btn" @click="goPage">登陆</div>
          <div class="conform_btn" @click="doSignUp">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/login";

export default {
  name: "loginView",
  data() {
    return {
      username: "",
      password: "",
      code: "",
    };
  },
  methods: {
    goPage() {
      login({
        username: this.username,
        password: this.password,
      }).then((res) => {
        if (res.code == 200) {
          this.$router.push({
            path: "/home",
          });
          console.log(res);
          window.localStorage.setItem('token', res.data.token)
        } else {
          alert(res.message);
        }
      });
    },

    doSignUp() {
      register({
        username: this.username,
        password: this.password,
      }).then(res => {
        if (res.code == 200) {
          this.username = ''
          this.password = ''
          this.$message({
            message: '操作成功',
            type: 'success'
          })
        } else {
          alert(res.message);
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: vw(1920);
  height: vh(1080);
  background: url("@/assets/image/login/login_bg.jpg") no-repeat top left;
  background-size: 100% auto;
  position: relative;

  .main {
    position: absolute;
    right: vw(224);
    bottom: vh(302);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-bottom: vh(167);

      h2 {
        font-weight: 400;
        font-size: vh(48);
        color: #ffffff;
        margin: 0;
        padding: 0;
      }
    }

    .form {
      .item {
        width: vw(436);
        height: vh(52);
        background: rgba(9, 59, 121, 0.4);
        box-shadow: 0px vh(2) vh(4) 0px rgba(0, 0, 0, 0.5);
        border-radius: vh(2);
        border: vh(2) solid #5fcbff;
        display: flex;
        align-items: center;
        margin-top: vh(20);

        .icon {
          width: vw(52);
          height: vh(52);

          .elIcon {
            width: vw(40);
            height: vh(40);
            color: white;
            svg {
              width: vw(40);
              height: vh(40);
            }
          }
        }

        .inp {
          width: 100%;
          height: vh(52);

          input {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: #ffffff;
            font-size: vh(32);
          }
        }
      }

      .code {
        width: vw(440);
        height: vh(56);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: vh(20);

        .code_img {
          width: vw(120);
          height: vh(60);
          background: #ffffff;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
          border-radius: 2px;

          img {
            border-radius: 2px;
            width: 100%;
            height: 100%;
          }
        }

        .code_item {
          width: vw(312);
          height: 100%;
          background: rgba(9, 59, 121, 0.4);
          box-shadow: 0px vh(2) vh(4) 0px rgba(0, 0, 0, 0.5);
          border-radius: vh(2);
          border: vh(2) solid #5fcbff;
          display: flex;
          align-items: center;

          .icon {
            width: vw(52);
            height: vh(52);
          }

          .inp {
            width: 100%;
            height: vh(52);

            input {
              width: 100%;
              height: 100%;
              background: transparent;
              border: none;
              outline: none;
              color: #ffffff;
              font-size: vh(32);
            }
          }
        }
      }

      .btn_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: vw(436);
      }

      .conform_btn {
        margin-top: vh(20);
        cursor: pointer;
        width: vw(210);
        height: vh(52);
        background: #0584bf;
        box-shadow: 0 vh(2) vh(4) 0 rgba(0, 0, 0, 0.5);
        border-radius: vh(2);
        border: vh(2) solid #5fcbff;
        font-weight: 500;
        font-size: vh(24);
        color: #fff;
        text-align: center;
        line-height: vh(56);
      }
    }
  }
}
</style>
