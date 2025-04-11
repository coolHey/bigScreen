<template>
  <div class="bottomView">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>设备故障处理概况</span>
    </div>
    <div class="con">
      <!-- <div class="statistics">
        <div class="statistics_title">设备总数</div>
        <div class="cont">
          <span class="num">24</span>
          <span class="unit">台</span>
        </div>
      </div>
      <div class="chartStatistics" id="chartStatistics" ref="chartStatistics"></div> -->
      <div class="zzt">
        <p>发生次数</p>
        <div class="c1" id="c1" ref="c1"></div>
      </div>
      <!-- <div class="bzt">
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
        <div class="box">
          <div class="c3" id="c3" ref="c3"></div>
          <div class="desc">
            <p>
              <span class="label">未处理数：</span>
              <span class="num">{{
                monitorErrorHandleState?.remoteHandle?.errorNoSolve || 0
              }}</span>
            </p>
            <p>
              <span class="label">已处理数：</span>
              <span class="num">{{
                monitorErrorHandleState?.remoteHandle?.errorSolved || 0
              }}</span>
            </p>
            <p>
              <span class="label">异常总数：</span>
              <span class="num">{{
                monitorErrorHandleState?.remoteHandle?.errorTotal || 0
              }}</span>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  computed: {
    monitorErrorHandleState() {
      return this.data.monitorErrorHandleState || {};
    },
  },

  watch: {
    data: {
      handler(oldVal, newVal) {
        this.initChart1();
        // this.initChart2();
        // this.initChart3();
      },
      deep: true,
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.initChart1();
      // this.initChart2();
      // this.initChart3();
    });
  },
  methods: {
    initChart1() {
      const { errorCount = {} } = this.monitorErrorHandleState;
      let option = {
        grid: {
          left: "10%",
          right: "0%",
          top: "20%",
          bottom: "30%",
        },
        xAxis: {
          type: "category",
          axisLine: false,
          axisLabel: {
            textStyle: {
              color: "#2a8ab9",
              fontSize: 10,
            },
          },
          data: [
            "变压器重置",
            "变压器过载",
            "三融不平衡",
            "过电压",
            "欠电压",
            "无助欠补",
          ],
        },
        yAxis: {
          type: "value",
          name: "单位（次）",
          nameTextStyle: {
            color: "#2a8ab9",
            fontSize: 10,
            lineHeight: 0,
            padding: [0, 0, -2, 0],
            nameLocation: "start",
          },
          splitLine: { show: false },
          axisLabel: {
            // formatter: '次',
            color: "#2a8ab9",
            fontSize: 10,
          },
        },
        series: [
          {
            barWidth: "18%",
            itemStyle: {
              color: "#f4b520",
              label: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            data: [
              errorCount["transformer-reset"],
              errorCount["transformer-overload"],
              errorCount["imbalance-three-integrations"],
              errorCount["over-voltage"],
              errorCount["under-voltage"],
              errorCount["helplessness-shortfall"],
            ],
            type: "bar",
          },
        ],
      };
      this.myChart = echarts.init(this.$refs.c1);
      this.myChart.setOption(option);
    },
    // initChart2() {
    //   const { errorHandle = {} } = this.monitorErrorHandleState;
    //   let option = {
    //     tooltip: {
    //       trigger: "item",
    //     },
    //     legend: {
    //       left: "left",
    //     },
    //     title: {
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
    //         radius: ["60%", "90%"],
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
    //             value: errorHandle?.["errorSolved"],
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
    //                 formatter: "异常处理率\n\n{d}%",
    //                 color: "#fff",
    //               },
    //             },
    //             itemStyle: { color: "#e8ec6b" },
    //           },
    //           {
    //             value: errorHandle?.["errorNoSolve"],
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
    //   this.myChart = echarts.init(this.$refs.c2);
    //   this.myChart.setOption(option);
    // },
    // initChart3() {
    //   const { remoteHandle = {} } = this.monitorErrorHandleState;
    //   let option = {
    //     tooltip: {
    //       trigger: "item",
    //     },
    //     legend: {
    //       left: "left",
    //     },
    //     title: {
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
    //         radius: ["60%", "90%"],
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
    //             value: remoteHandle?.["errorSolved"],
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
    //                 formatter: "远程处理率\n\n{d}%",
    //                 color: "#fff",
    //               },
    //             },
    //             itemStyle: { color: "#e8ec6b" },
    //           },
    //           {
    //             value: remoteHandle?.["errorNoSolve"],
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
    //   this.myChart = echarts.init(this.$refs.c3);
    //   this.myChart.setOption(option);
    // },
  },
};
</script>

<style lang="scss" scoped>
.bottomView {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: vw(700);
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

  .con {
    width: 100%;
    padding: vh(12) vw(12);

    .zzt {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      p {
        display: flex;
        flex-direction: column;
        width: vw(20);
        font-size: vw(16);
        color: #fff;
        // background: #074281;
        height: vh(140);
        justify-content: center;
        align-items: center;
        padding: 0 vw(5);
        border-radius: vw(4);
        margin-right: vw(8);
      }

      .c1 {
        width: vw(600);
        height: vh(140);
        border-radius: vw(4);
        // background: #074281;
      }
    }

    // .bzt {
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   width: 100%;
    //   margin-top: vh(8);

    //   .box {
    //     width: vw(310);
    //     height: vh(140);
    //     // background: #074281;
    //     border-radius: vw(4);
    //     display: flex;
    //     align-items: center;

    //     &:first-child {
    //       margin-right: vw(13);
    //     }

    //     .c2,
    //     .c3 {
    //       width: vw(155);
    //       height: 100%;
    //     }

    //     .desc {
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: flex-start;

    //       .label {
    //         color: #56a4ed;
    //         font-size: vw(16);
    //       }

    //       .num {
    //         color: #a7d0f6;
    //         font-size: vw(24);
    //         font-weight: normal;
    //       }
    //     }
    //   }
    // }
  }
}
</style>
