<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>年度目标</span>
    </div>
    <div class="goalsMain">
      <div class="completed">
        <div>
          <p>年度销量</p>
          <p>1382</p>
        </div>
        <div>
          <p>年度产量</p>
          <p>13个</p>
        </div>
      </div>
      <div class="projectName">沿江一</div>
      <div class="planned">
        <div>
          <p>年度销量</p>
          <p>1382</p>
        </div>
        <div>
          <p>年度产量</p>
          <p>13个</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: vh(56);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .goalsMain {
    width: vw(362);
    height: vh(188);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: url(../../../assets/image/goals_bg.jpg) top left no-repeat;
    background-size: 100% 100%;
    margin-top: vh(40);

    .completed,
    .planned {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        &:nth-of-type(1) {
          margin-bottom: vh(26);
        }

        p:nth-of-type(1) {
          font-size: vw(18);
          color: #c2ddff;
          line-height: vh(30);
          text-align: left;
          font-style: normal;
        }

        p:nth-of-type(2) {
          font-weight: 500;
          font-size: vw(16);
          color: #fff;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
        }
      }
    }

    .planned > div {
      align-items: flex-start;
    }

    .projectName {
      width: vw(140);
      height: vh(116);
      background: url(../../../assets/image/goals_icon.jpg) top left no-repeat;
      background-size: 100%, 100%;
      font-size: vw(14);
      color: #d3f4ff;
      line-height: vh(16);
      text-align: left;
      font-style: normal;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: vh(12);
    }
  }
}
</style>
