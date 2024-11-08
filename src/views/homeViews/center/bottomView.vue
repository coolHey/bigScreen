<template>
  <div class="bottomView">
    <div class="title">
      <img src="../../../assets/image/title_icon.png" />
      <span>设备运维状态</span>
    </div>
    <div class="con">
      <div class="statistics">
        <div class="statistics_title">设备总数</div>
        <div class="cont">
          <span class="num">24</span>
          <span class="unit">台</span>
        </div>
      </div>
      <div class="chartStatistics" id="chartStatistics" ref="chartStatistics"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let dataAge = [
        {
          name: "名称2",
          value: 25,
          num: 25,
        },
        {
          name: "名称3",
          value: 15,
          num: 15,
        },
      ];
      let option = {
        // title: {
        //   text: 'Referer of a Website',
        //   subtext: 'Fake Data',
        //   left: 'center'
        // },
        // tooltip: {
        //   trigger: 'item'
        // },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left'
        // },
        series: [
          {
            color: ["#03348E", "#023590"],
            type: "pie",
            radius: ["24", "60"],
            // labelLine: {
            //   normal: {
            //     length: 15,
            //     length2: 25,
            //     lineStyle: {
            //       type: "solid",
            //       color: "#C7DDEE",
            //     },
            //   },
            // },
            label: {
              normal: {
                formatter: (params) => {
                  console.log(params);
                  return `在线状态\n离线率：\n离线台数：`;
                },
                borderWidth: 0,
                borderRadius: 4,
                fontSize: 13,
                color: "#3494BD",
                overflow: "none",
              },
            },
            data: dataAge,
          },
          {
            type: "pie",
            radius: ["12", "14"],
            data: [100],
            color: "#415a7c",
            label: {
              show: false,
            },
          },
          {
            type: "pie",
            radius: ["0", "10"],
            data: [100],
            color: "#4E79AE",
            label: {
              show: false,
            },
          },
        ],
      };
      // let option = {
      //   title: {
      //     text: 'Referer of a Website',
      //     subtext: 'Fake Data',
      //     left: 'center'
      //   },
      //   tooltip: {
      //     trigger: 'item'
      //   },
      //   legend: {
      //     orient: 'vertical',
      //     left: 'left'
      //   },
      //   series: [
      //     {
      //       name: 'Access From',
      //       type: 'pie',
      //       radius: '50%',
      //       data: [
      //         { value: 1048, name: 'Search Engine' },
      //         { value: 735, name: 'Direct' },
      //         { value: 580, name: 'Email' },
      //         { value: 484, name: 'Union Ads' },
      //         { value: 300, name: 'Video Ads' }
      //       ],
      //       emphasis: {
      //         itemStyle: {
      //           shadowBlur: 10,
      //           shadowOffsetX: 0,
      //           shadowColor: 'rgba(0, 0, 0, 0.5)'
      //         }
      //       }
      //     },
      //     {
      //       type: "pie",
      //       radius: ["12", "14"],
      //       data: [100],
      //       color: "#415a7c",
      //       label: {
      //         show: false,
      //       },
      //     },
      //     {
      //       type: "pie",
      //       radius: ["0", "10"],
      //       data: [100],
      //       color: "#4E79AE",
      //       label: {
      //         show: false,
      //       },
      //     },
      //   ]
      // }
      this.myChart = echarts.init(this.$refs.chartStatistics);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: vh(16);

    .statistics {
      background: url(../../../assets/image/statistic_bg.png) top left no-repeat;
      background-size: 100% 100%;
      width: vw(168);
      height: vh(200);
      margin-right: vw(35);

      .statistics_title {
        font-size: vw(22);
        color: #fff;
        line-height: vh(25);
        letter-spacing: vw(2);
        text-align: left;
        font-style: normal;
        text-align: center;
        margin-top: vh(4);
      }

      .cont {
        font-size: vw(22);
        color: #fff;
        line-height: vh(25);
        letter-spacing: vw(2);
        text-align: left;
        font-style: normal;
        text-align: center;
        margin-top: vh(32);

        span:nth-of-type(2) {
          font-size: vw(16);
        }
      }
    }

    .chartStatistics {
      width: vw(502);
      height: vh(194);
    }
  }
}
</style>
