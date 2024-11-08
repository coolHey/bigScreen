<template>
  <div class="mapView">
    <div class="mapChart" id="mapChart" ref="mapChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import china from "@/utils/china.json";
export default {
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.myChart = echarts.init(this.$refs.mapChart);
      echarts.registerMap("china", { geoJSON: china });
      let img = document.createElement("img");
      img.src = require("@/assets/image/map_bg.jpg");
      let options = {
        series: [
          //原本的图层
          {
            type: "map",
            map: "china",
            aspectScale: 0.85,
            zoom: 1.5,
            top: "middle",
            left: "center",
            roam: true,
            selectedMode: "none",
            tooltip: {
              textStyle: {
                fontSize: 32,
              },
              formatter: function (params) {
                if (params.value) {
                  return `${params.name}：${params.value}`;
                } else {
                  return "";
                }
              },
            },
            label: {
              show: true,
              color: "#FFF",
              formatter: function (value) {
                if (value.name == "南海诸岛") {
                  return " ";
                }
                return value.name;
              },
            },
            itemStyle: {
              areaColor: {
                // type: "image",
                image: img,
                repeat: "no-repeat",
              },
              borderColor: "#4f83b3",
              borderWidth: 2,
              // areaColor: {
              //   type: "linear",
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [
              //     {
              //       offset: 0,
              //       color: "transparent", // 0% 处的颜色
              //       // color: "#fff" // 0% 处的颜色
              //     },
              //     {
              //       offset: 1,
              //       color: "transparent", // 100% 处的颜色
              //       // color: "#fff" // 100% 处的颜色
              //     },
              //   ],
              //   global: true, // 缺省为 false
              //   // image: ""
              // },
              emphasis: {
                areaColor: {
                  image: img,
                  repeat: "no-repeat",
                },
                // label: {
                //   color: "",
                // },
              },
            },
            emphasis: {
              areaColor: {
                image: img,
                repeat: "no-repeat",
              },
            },
            select: {},
            zlevel: 2,
            data: [],
          },
        ],
        // elements: [
        //   {
        //     type: "image",
        //     style: {
        //       image: "http://path.to/your/background.jpg", // 背景图片的URL
        //       width: "100%", // 背景图片的宽度，可以是百分比或者像素值
        //       height: "100%", // 背景图片的高度，可以是百分比或者像素值
        //     },
        //     left: 0,
        //     top: 0,
        //   },
        // ],
      };
      this.myChart.setOption(options);
      this.myChart.on("georoam", function (event) {
        if (event.zoom != null) {
          // 检查是否是缩放事件
          this.myChart.setOption({
            series: [
              {
                // 重新设置地图数据，确保地图正确显示
                map: "china",
              },
            ],
          });
        }
      });
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

<style scoped lang="scss">
.mapView {
  width: 100%;
  height: vh(600);

  .mapChart {
    width: 100%;
    height: 100%;
  }
}
</style>
