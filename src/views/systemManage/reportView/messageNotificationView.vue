<template>
  <div class="dataAnalysis">
    <div class="messageList">
      <ul>
        <li v-for="item in 10" :key="item">
          <div class="message">
            <div class="img"></div>
            <div class="info">
              <p>消息通知</p>
              <p>设备JXB-100890需要维保，请及时处理。</p>
            </div>
          </div>
          <div class="time">2023-09-20 12:00:00</div>
        </li>
      </ul>
    </div>
    <div class="paginationBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="1000"
        background
        layout="total, prev, pager, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 vw(40) 0 vw(28);
        margin-bottom: vh(20);
        .message {
          display: flex;
          align-items: center;
          .img {
            width: vw(48);
            height: vh(48);
            background: url(../../../assets/image/message_icon.png) top left
              no-repeat;
            background-size: 100% 100%;
          }
          .info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-left: vw(24);
            p:nth-of-type(1) {
              font-weight: 600;
              font-size: vw(20);
              color: #fff;
              line-height: vh(28);
              font-style: normal;
            }
            p:nth-of-type(2) {
              font-weight: 400;
              font-size: vw(16);
              color: #fff;
              line-height: vh(22);
              font-style: normal;
            }
          }
        }
        .time {
          font-weight: 400;
          font-size: vw(12);
          color: #fff;
          line-height: vh(18);
          font-style: normal;
        }
      }
    }
  }
  .paginationBox {
    margin-top: vh(32);
    display: flex;
    justify-content: flex-end;
    :deep(.el-pagination) {
      .el-pagination__total {
        font-weight: 600;
        font-size: vw(12);
        color: #90b9ff;
        font-style: normal;
      }
      .btn-prev {
        width: vw(32);
        height: vh(32);
        background: rgba(0, 93, 196, 0.2);
        &::before {
          content: "";
          background: url(../../../assets/image/prev.png) top left no-repeat;
          background-size: 100% 100%;
          width: vw(10);
          height: vh(10);
        }
        .el-icon {
          display: none;
        }
      }
      .btn-next {
        width: vw(32);
        height: vh(32);
        background: rgba(0, 93, 196, 0.2);
        &::before {
          content: "";
          background: url(../../../assets/image/next.png) top left no-repeat;
          background-size: 100% 100%;
          width: vw(10);
          height: vh(10);
        }
        .el-icon {
          display: none;
        }
      }
      .el-pager {
        li {
          width: vw(32);
          height: vh(32);
          background: rgba(0, 93, 196, 0.2);
          font-weight: bold;
          font-size: vw(14);
          color: #fff;
          font-style: normal;
          &.is-active {
            background: linear-gradient(
              270deg,
              rgba(0, 105, 255, 0) 0%,
              rgba(62, 135, 255, 0.43) 100%
            );
            border: 1px solid;
            border-image: linear-gradient(
                136deg,
                rgba(183, 217, 255, 1),
                rgba(53, 149, 255, 1),
                rgba(145, 198, 255, 1),
                rgba(0, 118, 246, 1)
              )
              1 1;
          }
        }
      }
    }
  }
}
</style>
