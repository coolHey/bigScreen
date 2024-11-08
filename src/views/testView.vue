<template>
  <div class="container">
    <div id="chart1" class="chart1"></div>
    <div id="chart2" class="chart2"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let option1 = {
        tooltip: {
          show: false,
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#89ace0",
              width: 1,
              type: "solid",
            },
          },
        },
        legend: {
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        },
        singleAxis: {
          top: 50,
          bottom: 50,
          axisTick: {
            show: false,
          },
          // inverse: true,
          axisLine: {
            lineStyle: {
              color: "#89ace0",
            },
            symbol: "arrow",
          },
          axisLabel: {
            color: "#000",
          },
          type: "time",
          axisPointer: {
            animation: false,
            label: {
              show: false,
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "dashed",
              opacity: 0.2,
            },
          },
        },
        series: [
          {
            type: "themeRiver",
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: "rgba(0, 0, 0, 0.8)",
              },
            },
            data: [
              ["2015/11/08", 0, "DQ"],
              ["2015/11/09", 30, "DQ"],
              ["2015/11/10", 72, "DQ"],
              ["2015/11/11", 1, "DQ"],
              ["2015/11/12", 25, "DQ"],
              ["2015/11/13", 1, "DQ"],
              ["2015/11/14", 1, "DQ"],
              ["2015/11/15", 9, "DQ"],
              ["2015/11/16", 1, "DQ"],
              ["2015/11/17", 0, "DQ"],
            ],
          },
        ],
      };

      let option2 = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            // [10.0, 8.04],
            //   [8.07, 6.95],
            //   [13.0, 7.58],
            //   [9.05, 8.81],
            //   [11.0, 8.33],
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
            ],
            type: "scatter",
            // itemStyle: {
            //   borderColor: "#000",
            // },
            // itemStyle: {
            //   normal: {
            //     // 这里的 rotation 是指针针指的角度，正值表示逆时针旋转
            //     rotation: 90,
            //   },
            // },
          },
        ],
      };
      let myChart1 = echarts.init(document.getElementById("chart1"));
      let myChart2 = echarts.init(document.getElementById("chart2"));
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      // var data = myChart2.getOption().series[0].data;
      //   // 更新点的样式
      //   data.forEach(function (item, index) {
      //     item.itemStyle = {
      //       normal: {
      //         borderColor: index === params.dataIndex ? "red" : "black", // 点击的点边框颜色，其他点恢复默认
      //         borderWidth: 2,
      //       },
      //     };
      //   });

      //   // 更新图表
      //   myChart2.setOption({
      //     series: [
      //       {
      //         data: data,
      //       },
      //     ],
      //   });
      myChart2.on("click", function (params) {
        console.log(params);
        if (params.componentType === "series") {
          let dataIndex = params.dataIndex;
          console.log(dataIndex);
          let color1 = "#5470c6";
          let series = option2.series[0];
          let itemStyle = series.itemStyle || (series.itemStyle = {});
          // itemStyle.borderColor = "#ff0000";
          let idx = null;
          for (let i = 0; i < series.data.length; i++) {
            if (i === dataIndex) {
              idx = i;
              break;
            }
            idx = null;
          }
          console.log(idx);
          itemStyle.borderColor = dataIndex === idx ? "#ff0000" : color1;
          myChart2.setOption(option2);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chart1 {
  width: vw(500);
  height: vh(500);
}

.chart2 {
  width: vw(500);
  height: vh(500);
}
</style>
