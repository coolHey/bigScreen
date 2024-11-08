<template>
  <div class="container">
    <div class="main">
      <div class="title">
        <h2>原料药生产数据分析平台</h2>
      </div>
      <div class="form">
        <div class="username item">
          <div class="icon"></div>
          <div class="inp">
            <input type="text" />
          </div>
        </div>
        <div class="password item">
          <div class="icon"></div>
          <div class="inp">
            <input type="password" />
          </div>
        </div>
        <div class="code">
          <div class="code_item">
            <div class="icon"></div>
            <div class="inp">
              <input type="password" />
            </div>
          </div>
          <div class="code_img">
            <div></div>
          </div>
        </div>
        <div class="conform_btn" @click="goPage">登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      a: 1,
    };
  },
  methods: {
    goPage() {
      this.$router.push({
        path: "/home",
      });
    },
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

      .conform_btn {
        margin-top: vh(20);
        width: vw(436);
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
