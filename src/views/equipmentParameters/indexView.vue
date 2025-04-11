<template>
  <div class="container">
    <div class="bracketsLeft"></div>
    <div class="main">
      <h2 class="title">对比图</h2>
      <div class="content">
        <div class="formData">
          <ul v-for="(item, idx) in filterList" :key="item">
            <li>
              <div class="label">时间范围：</div>
              <div class="datePick">
                <el-date-picker
                  v-model="item.time"
                  value-format="YYYY-MM-DD HH:mm:ss"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="defaultTime1"
                  time-format="HH:mm"
                >
                </el-date-picker>
              </div>
            </li>
            <li>
              <div class="label">设备ID：</div>
              <input
                type="text"
                name=""
                id=""
                class="inp"
                placeholder="请输入"
                v-model="item.monitorId"
              />
            </li>
            <li>
              <div class="label">选择参数：</div>
              <div class="elSelect">
                <el-select
                  v-model="item.keyWords"
                  multiple
                  collapse-tags
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </li>
            <li class="delete" @click="handleDelete(idx)"></li>
            <!-- <li>
              <div class="label">设备到期日：</div>
              <div class="datePick">
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间"
                >
                </el-date-picker>
              </div>
            </li> -->
          </ul>
        </div>
        <div class="buttons">
          <div class="analysis" @click="getData">对比分析</div>
          <div class="add" @click="addFilter">新增条件</div>
        </div>
        <div class="charts">
          <div class="myChart" id="myChart" ref="myChart"></div>
        </div>
      </div>
    </div>
    <div class="bracketsRight"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getCompareData } from "@/api/parameters";
export default {
  data() {
    return {
      options: [
        {
          value: "c1",
          label: "离心机-运行模式",
        },
        {
          value: "c2",
          label: "离心机-运行速度",
        },
        {
          value: "c3",
          label: "离心机-运行频率",
        },
        {
          value: "c4",
          label: "离心机-氮气",
        },
        {
          value: "c5",
          label: "离心机-输出电压",
        },
        {
          value: "c6",
          label: "离心机-输出电流",
        },
        {
          value: "c7",
          label: "离心机-输出功率",
        },
        {
          value: "c8",
          label: "离心机-震动值",
        },
        {
          value: "c9",
          label: "离心机-真空上料",
        },
        {
          value: "c10",
          label: "离心机-螺旋输送",
        },
        {
          value: "k1",
          label: "干燥机-运行速度",
        },
        {
          value: "k2",
          label: "干燥机-真空度",
        },
        {
          value: "k3",
          label: "干燥机-压力",
        },
        {
          value: "k4",
          label: "干燥机-振动/流量",
        },
        {
          value: "k5",
          label: "干燥机-输出电压",
        },
        {
          value: "k6",
          label: "干燥机-输出电流",
        },
        {
          value: "k7",
          label: "干燥机-腔体温度",
        },
        {
          value: "k8",
          label: "干燥机-热源温泉",
        },
        {
          value: "k9",
          label: "干燥机-真空上料",
        },
        {
          value: "k10",
          label: "干燥机-螺旋输送",
        },
      ],
      value1: [],
      value2: [],
      value3: [],
      filterList: [
        {
          time: "",
          monitorId: "",
          id: "",
          keyWords: [],
        },
      ],
      myChart: null,
    };
  },

  mounted() {
    // this.initChart();
  },

  methods: {
    getRandomNumberUnderOneThousand() {
      return Math.floor(Math.random() * 1000);
    },

    getData() {
      let filterData = JSON.parse(JSON.stringify(this.filterList)) || [];
      filterData.forEach((v, i) => {
        filterData[i].beginTime = v.time.length >= 1 ? v.time[0] : "";
        filterData[i].endTime = v.time.length >= 1 ? v.time[1] : "";
      });
      let check = false;
      this.filterList.map((v) => {
        if (!v.keyWords.length || v.time.length < 2 || !v.monitorId) {
          check = true;
        }
      });
      if (check) {
        alert("请输入完整分析条件");
        return;
      }
      getCompareData(filterData).then((res) => {
        console.log(res);
      });
      // // let options = {
      // //   nameData: [],
      // //   series: [],
      // // };
      // // this.filterList.forEach((v, idx) => {
      // //   options.nameData.push(idx);
      // //   let data = [820, 932, 901, 934, 1290, 1330, 1320];
      // //   let item = {
      // //     name: "Email",
      // //     data: [],
      // //     type: "line",
      // //     smooth: true,
      // //     symbol: "none",
      // //   };
      // //   data.forEach((k) => {
      // //     item.data.push(this.getRandomNumberUnderOneThousand());
      // //   });
      // //   options.series.push(item);
      // });
      // console.log(options);
      // this.myChart = null;
      // this.initChart(options);
    },

    handleDelete(idx) {
      this.filterList.splice(idx, 1);
    },

    addFilter() {
      this.filterList.push({
        time: [],
        id: "",
        monitorId: "",
        keyWords: [],
      });
    },

    initChart(opt) {
      console.log(opt);

      let option = {
        tooltip: {
          show: true,
          trigger: "axis",
        },
        legend: {
          top: "5%",
          data: opt?.nameData || [],
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
          data: ["数值1", "数值2", "数值3", "数值4", "数值5", "数值6", "数值7"],
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
        series: opt.series,
        // series: [
        //   {
        //     name: "Email",
        //     data: opt?.data || [],
        //     type: "line",
        //     smooth: true,
        //     symbol: "none",
        //   },
        // ],
      };
      console.log(option);

      this.myChart = echarts.init(this.$refs.myChart);
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: vw(1920);
  height: vh(995);

  .bracketsLeft,
  .bracketsRight {
    width: vw(258);
    height: vh(438);

    &.bracketsLeft {
      background: url(../../assets/image/brackets_left.png) top left no-repeat;
      background-size: 100% 100%;
    }

    &.bracketsRight {
      background: url(../../assets/image/brackets_right.png) top left no-repeat;
      background-size: 100% 100%;
    }
  }

  .main {
    background: url(../../assets/image/equipmentParameters_bg.png) top left
      no-repeat;
    background-size: 100% 100%;
    width: vw(1390);
    height: vh(840);
    padding: 0 vw(40);

    .title {
      font-size: vw(22);
      color: #fff;
      line-height: vh(25);
      letter-spacing: vw(2);
      text-shadow: 0px vh(2) vw(4) rgba(0, 42, 81, 0.64);
      margin-top: vh(10);
    }

    .content {
      .formData {
        height: vh(226);
        overflow-y: auto;

        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding-top: vh(25);

          li {
            .label {
              font-size: vw(18);
              color: #fff;
              line-height: vh(20);
              letter-spacing: vw(1);
              font-style: normal;
              text-transform: none;
              margin-bottom: vh(8);
            }

            .elSelect {
              width: vw(378);
              height: vh(40);

              :deep(.el-select) {
                width: 100%;
                height: 100%;
                background: url(../../assets/image/inp_bg.png) top left
                  no-repeat;
                background-size: 100% 100%;
                border: none;
                box-shadow: none;
                padding: 0;

                .el-select__wrapper {
                  width: 100%;
                  height: 100%;
                  background: transparent;
                  border: none;
                  box-shadow: none;
                }
              }
            }

            .datePick {
              width: vw(378);
              height: vh(40);

              :deep(.el-date-editor) {
                background: transparent;
                width: 100%;
                height: 100%;
                background: url(../../assets/image/inp_bg.png) top left
                  no-repeat;
                background-size: 100% 100%;
                border: none;
                box-shadow: none;
                padding: 0;

                .el-icon {
                  display: none;
                }

                .el-input__wrapper {
                  // width: 100%;
                  // height: 100%;
                  background: url(../../assets/image/inp_bg.png) top left
                    no-repeat;
                  background-size: 100% 100%;
                  border: none;
                  box-shadow: none;
                  padding: 0 vw(16);
                }
              }
            }

            .inp {
              width: vw(348);
              height: vh(40);
              padding: 0 vw(16);
              background: url(../../assets/image/inp_bg.png) top left no-repeat;
              background-size: 100% 100%;
              font-weight: 400;
              font-size: vw(14);
              color: #9cc1e5;
              line-height: vh(20);
              text-align: left;
              font-style: normal;
            }

            &.delete {
              background: url(../../assets/image/delete_bg.png) top left
                no-repeat;
              background-size: 100% 100%;
              width: vw(40);
              height: vh(40);
              margin-top: vh(26);
            }
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: vh(29) 0 vh(39) 0;

        .analysis,
        .add {
          width: vw(170);
          height: vh(42);
          font-size: vw(18);
          color: #fff;
          line-height: vh(42);
          letter-spacing: vw(1);
          font-style: normal;
          text-transform: none;
          text-align: center;
          cursor: pointer;

          &.analysis {
            background: url(../../assets/image/add_left.png) top left no-repeat;
            background-size: 100% 100%;
          }

          &.add {
            background: url(../../assets/image/add_bg.png) top left no-repeat;
            background-size: 100% 100%;
          }
        }
      }

      .charts {
        width: vw(1310);
        height: vh(456);
        background: url(../../assets/image/charts_bg.png) top left no-repeat;
        background-size: 100% 100%;

        .myChart {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
