<template>
  <div class="container">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>设备实时在线率</span>
    </div>
    <div id="sales" class="chart" ref="sales"></div>
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
  mounted() {
    this.initEchart();
  },
  watch: {
    data: {
      handler() {
        if (!this.data.monitorOnlineState) return;
        this.initEchart();
      },
      deep: true,
    },
  },
  methods: {
    initEchart() {
      const { monitorOnlineState = {} } = this.data;
      const total = monitorOnlineState["total-monitor"];
      const online = monitorOnlineState["online-monitor"];
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        title: {
          // text: '设备实时在线率',
          subtext: `总台数${total}   在线率:${online}`,
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
            name: "设备实时在线率",
            type: "pie",
            radius: ["40%", "60%"],
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
                value: online,
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
                    formatter: "{d}%",
                    color: "#fff",
                  },
                },
                itemStyle: { color: "#f7bc1d" },
              },
              {
                value: total - online,
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
      this.myChart = echarts.init(this.$refs.sales);
      this.myChart.setOption(option);
      // window.addEventListener('resize', () => {
      //   this.myChart.resize()
      // })
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
    height: vh(300);
    margin-top: vh(20);
    overflow: hidden;
  }
}
</style>
