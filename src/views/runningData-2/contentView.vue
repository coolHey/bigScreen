<template>
  <div class="contentView">
    <div class="chart1 chart" ref="chart1"></div>
    <div class="chart2 chart" ref="chart2"></div>
    <div class="chart3 chart" ref="chart3"></div>
    <!-- <div class="contentBox">
      <div class="content content1">
        <ul>
          <li>
            <span>真空上料</span>
            <span>跑的飞快</span>
          </li>
        </ul>
      </div>
      <div class="content content1">
        <ul>
          <li>
            <span>螺旋输送</span>
            <span>跑的飞快</span>
          </li>
        </ul>
      </div>
    </div> -->
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
      myChart1: null,
      myChart2: null,
      myChart3: null,
    };
  },
  watch: {
    data: {
      handler() {
        if (!this.data?.[0]?.length) {
          return;
        }
        const x = (this.data?.[0] || []).map((item) => item.createTime);
        const frequencys = (this.data?.[0] || []).map((item) => item.frequency);
        const electricitys = (this.data?.[0] || []).map(
          (item) => item.electricity
        );
        const vibrations = (this.data?.[0] || []).map((item) => item.vibration);
        this.initChart(1, "离心机-frequency", x, frequencys);
        this.initChart(2, "离心机-electricity", x, electricitys);
        this.initChart(3, "离心机-vibration", x, vibrations);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.initChart(1, "离心机-frequency");
    this.initChart(2, "离心机-electricity");
    this.initChart(3, "离心机-vibration");
  },
  methods: {
    initChart(flag, name, x = [], y = []) {
      let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "5%",
          data: [name],
          textStyle: {
            color: "#D1DFE9",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "6%",
          top: "20%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: x,
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#D1DFE9",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#D1DFE9",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(73, 118, 169, 0.32)",
            },
          },
        },
        series: [
          {
            name,
            data: y,
            type: "line",
            smooth: true,
            symbol: "none",
          },
        ],
      };
      // if (flag == 1) {
      //   this.myChart1 = echarts.init(this.$refs.chart1);
      //   this.myChart1.setOption(option);
      // } else {
      //   this.myChart2 = echarts.init(this.$refs.chart2);
      //   this.myChart2.setOption(option);
      // }
      const chart = echarts.init(this.$refs[`chart${flag}`]);
      chart.setOption(option);
      this[`myChart${flag}`] = chart;
      // window.addEventListener('resize', () => {
      //   this.myChart.resize()
      // })
    },
  },
};
</script>

<style lang="scss" scoped>
.contentView {
  margin-top: vh(80);

  .chart {
    width: vw(880);
    height: vh(290);
    background: url(../../assets/image/charts_bg.png) top left no-repeat;
    background-size: 100% 100%;

    &.chart2 {
      margin-top: vh(20);
    }
  }

  .contentBox {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
}
</style>
