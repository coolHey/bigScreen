<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>销售额</span>
    </div>
    <div id="sales" class="chart" ref="sales"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data () {
    return {
      myChart: null
    }
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      let yList = [32, 58, 64, 64];
      let xData = ["10/24", "10/25", "10/26", "10/27"];
      let dom = 300;
      let barWidth = dom / 20;
      let colors = [];
      for (let i = 0; i < 4; i++) {
        colors.push({
          type: "linear",
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#73fcff", // 最左边
            },
            {
              offset: 0.5,
              color: "#86eef1", // 左边的右边 颜色
            },
            {
              offset: 0.5,
              color: "#5ad6d9", // 右边的左边 颜色
            },
            {
              offset: 1,
              color: "#3dc8ca",
            },
          ],
        });
      }
      let option = {
        // backgroundColor: "#010d3a",
        //提示框
        tooltip: {
          trigger: "axis",
          formatter: "{b} : {c}",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        /**区域位置*/
        grid: {
          left: "20%",
          right: "10%",
          top: "10%",
          bottom: "35%",
        },
        //X轴
        xAxis: {
          show: true,
          data: xData,
          type: "category",
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(255,255,255,1)",
              shadowColor: "rgba(255,255,255,1)",
              shadowOffsetX: "20",
            },
            symbol: ["none", "arrow"],
            symbolOffset: [0, 25],
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 30,
            fontSize: 15,
          },
        },
        yAxis: {
          show: true,
          splitNumber: 4,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#075858",
            },
          },
          axisLabel: {
            color: "#FFFFFF",
            margin: 30,
            fontSize: 15,
          },
        },
        series: [
          {
            // 柱状图柱体
            type: "bar",
            barWidth: barWidth,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#003D97",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 61, 151, 0)",
                  },
                ]),
              },
            },
            label: {
              show: false,
              position: [barWidth / 2, -(barWidth + 20)],
              color: "#ffffff",
              fontSize: 14,
              fontStyle: "bold",
              align: "center",
            },
            data: yList,
          },
          {
            // 柱状图底部
            z: 2,
            type: "pictorialBar",
            data: yList,
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              normal: {
                color: "transparent",
              },
            },
          },
          {
            // 柱状图顶部
            z: 3,
            type: "pictorialBar",
            symbolPosition: "end",
            data: yList,
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: "#2A87FF",
              },
            },
          },
        ],
      };
      this.myChart = echarts.init(this.$refs.sales);
      this.myChart.setOption(option);
      // window.addEventListener('resize', () => {
      //   this.myChart.resize()
      // })
    },
  },
  beforeDestroy() {
    // window.removeEventListener('resize', () => {
    //   this.myChart.resize()
    // })
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: vh(56);

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
    height: vh(193);
    margin-top: vh(20);
  }
}
</style>
