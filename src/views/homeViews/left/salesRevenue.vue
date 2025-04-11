<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>异常处理率</span>
    </div>
    <!-- <div id="sales" class="chart" ref="sales"></div> -->
    <div class="box">
      <div class="c2" id="c2" ref="c2"></div>
      <div class="desc">
        <p>
          <span class="label">未处理数：</span>
          <span class="num">{{
            monitorErrorHandleState?.errorHandle?.errorNoSolve || 0
          }}</span>
        </p>
        <p>
          <span class="label">已处理数：</span>
          <span class="num">{{
            monitorErrorHandleState?.errorHandle?.errorSolved || 0
          }}</span>
        </p>
        <p>
          <span class="label">异常总数：</span>
          <span class="num">{{
            monitorErrorHandleState?.errorHandle?.errorTotal || 0
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    data: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    this.initEchart();
  },
  watch: {
    data: {
      handler() {
        if (!this.data.monitorErrorHandleState) return;
        this.initEchart();
      },
      deep: true,
    },
  },
  computed: {
    monitorErrorHandleState() {
      return this.data.monitorErrorHandleState || {};
    },
  },
  methods: {
    // initEchart() {
    //   const { monitorOnlineState = {} } = this.data;
    //   const total = monitorOnlineState["total-monitor"];
    //   const online = monitorOnlineState["online-monitor"];
    //   let option = {
    //     tooltip: {
    //       trigger: "item",
    //     },
    //     legend: {
    //       top: "5%",
    //       left: "center",
    //     },
    //     title: {
    //       // text: '设备实时在线率',
    //       subtext: `总台数${total}   在线率:${online}`,
    //       left: "center",
    //       textStyle: {
    //         fontSize: 16,
    //         color: "#e7b53e",
    //       },
    //       subtextStyle: {
    //         color: "#e7b53e",
    //       },
    //     },
    //     series: [
    //       {
    //         name: "设备实时在线率",
    //         type: "pie",
    //         radius: ["40%", "60%"],
    //         avoidLabelOverlap: false,
    //         // top: '10%',
    //         hoverAnimation: false,
    //         label: {
    //           show: false,
    //           position: "center",
    //         },
    //         emphasis: {
    //           label: {
    //             show: false,
    //             fontSize: 10,
    //             fontWeight: "bold",
    //           },
    //         },
    //         labelLine: {
    //           show: false,
    //         },
    //         data: [
    //           {
    //             // 数据值
    //             value: online,
    //             // 数据项名称
    //             //该数据项是否被选中
    //             selected: false,
    //             // 单个扇区的标签配置
    //             label: {
    //               normal: {
    //                 // 是显示标签
    //                 show: true,
    //                 position: "center",
    //                 fontSize: 10,
    //                 // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
    //                 formatter: "{d}%",
    //                 color: "#fff",
    //               },
    //             },
    //             itemStyle: { color: "#f7bc1d" },
    //           },
    //           {
    //             value: total - online,
    //             itemStyle: { color: "#f2f2f2" },
    //             label: {
    //               normal: {
    //                 show: false,
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   };
    //   this.myChart = echarts.init(this.$refs.sales);
    //   this.myChart.setOption(option);
    //   // window.addEventListener('resize', () => {
    //   //   this.myChart.resize()
    //   // })
    // },
    initEchart() {
      const { errorHandle = {} } = this.monitorErrorHandleState;
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          left: "left",
        },
        title: {
          left: "center",
          textStyle: {
            fontSize: 16,
            color: "#e7b53e",
          },
          subtextStyle: {
            color: "#e7b53e",
          },
        },
        series: [
          {
            name: "异常处理率",
            type: "pie",
            radius: ["60%", "90%"],
            avoidLabelOverlap: false,
            // top: '10%',
            hoverAnimation: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 10,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                // 数据值
                value: errorHandle?.["errorSolved"],
                // 数据项名称
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    fontSize: 10,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "异常处理率\n\n{d}%",
                    color: "#fff",
                  },
                },
                itemStyle: { color: "#e8ec6b" },
              },
              {
                value: errorHandle?.["errorNoSolve"],
                itemStyle: { color: "#f2f2f2" },
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
            ],
          },
        ],
      };
      this.myChart = echarts.init(this.$refs.c2);
      this.myChart.setOption(option);
    },
  },
  // beforeDestroy() {
  //   // window.removeEventListener('resize', () => {
  //   //   this.myChart.resize()
  //   // })
  // },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: vh(240);

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

  .chart {
    width: 100%;
    height: vh(300);
    margin-top: vh(20);
    overflow: hidden;
  }
}

.box {
  // width: vw(310);
  height: vh(140);
  // background: #074281;
  border-radius: vw(4);
  display: flex;
  align-items: center;
  margin-top: vh(20);
  display: flex;
  justify-content: space-between;
  padding: vh(20) vw(20);

  // &:first-child {
  //   margin-right: vw(13);
  // }

  .c2,
  .c3 {
    width: vw(155);
    height: 100%;
  }

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .label {
      color: #56a4ed;
      font-size: vw(16);
    }

    .num {
      color: #a7d0f6;
      font-size: vw(24);
      font-weight: normal;
    }
  }
}
</style>
