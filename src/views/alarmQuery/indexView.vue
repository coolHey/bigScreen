<template>
  <div class="container">
    <div class="filter">
      <ul>
        <li>
          <span class="label">设备编号：</span>
          <input type="text" placeholder="请输入" class="inp" />
        </li>
        <li>
          <span class="label">质保日前：</span>
          <div class="datePick">
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </div>
        </li>
        <li>
          <button class="btn">查询</button>
          <button class="btn">重置</button>
        </li>
      </ul>
      <div class="addBtn" @click="handleExport">一键导出</div>
    </div>
    <div class="tableBox">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column
          type="index"
          align="center"
          label="序号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="msg"
          align="center"
          label="报警代码"
          show-overflow-tooltip
        >
          <template #default="scope">
            <span>
              {{ scope.row.msg.code }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="msg"
          align="center"
          label="报警内容"
          show-overflow-tooltip
        >
          <template #default="scope">
            <span>
              {{ scope.row.msg.msg }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="msg"
          align="center"
          label="报警分析"
          show-overflow-tooltip
        >
          <template #default="scope">
            <span>
              {{ scope.row.msg.analysis }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="msg"
          align="center"
          label="解决方案"
          show-overflow-tooltip
        >
          <template #default="scope">
            <span>
              {{ scope.row.msg.solve }}
            </span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="address" align="center" label="操作">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑
            </el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column> -->
      </el-table>
    </div>
    <div class="paginationBox">
      <el-pagination
        v-model:current-page="filterData.pn"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="filterData.total"
        background
        layout="total, prev, pager, next"
      >
      </el-pagination>
    </div>
    <!-- <div class="addDialog"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { getListData, doWarnExport } from "@/api/alarmQuery";
export default {
  data() {
    return {
      value1: "",
      region: "",
      tableData: [],
      filterData: {
        pn: 1,
        size: 10,
        total: 0,
      },
      multipleSelection: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 获取数据
    getList() {
      getListData(this.filterData).then((res) => {
        if (res.code == 200) {
          console.log(res.data);
          this.tableData = res.data.records;
          this.filterData.total = res.data.total;
        } else {
          this.$message({
            message: "获取数据失败",
            type: "warning",
          });
        }
      });
    },

    // 删除设备
    // handleDelete(row) {
    //   return;
    //   deleteDevice({ id: row.id }).then((res) => {
    //     console.log(res);
    //     if (res.code == 200) {
    //       this.$message({
    //         message: "删除成功",
    //         type: "success",
    //       });
    //       this.getList();
    //     } else {
    //       this.$message({
    //         message: "删除失败",
    //         type: "warning",
    //       });
    //     }
    //   });
    // },
    // 绑定选择项
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    // 导出
    handleExport() {
      let ids = [];
      this.multipleSelection.forEach((v) => {
        console.log(v);
        ids.push(v.id);
      });
      if (!ids.length) {
        this.$message({
          message: "请选择需要导出的数据",
          type: "warning",
        });
        return;
      }
      doWarnExport({ ids: ids ? ids.join(",") : "" }).then((res) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(
          new Blob([res], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
          })
        );
        link.download = "下载文件.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        console.log(res);
      });
    },

    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.filterData.pn = val;
      this.getList();
    },
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: vh(35) vw(80) vh(64) vw(80);
  position: relative;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        margin-right: vw(32);

        .label {
          font-weight: 400;
          font-size: vw(16);
          color: #d1dfe9;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
        }

        .inp {
          width: vw(221);
          height: vh(22);
          background: rgba(0, 112, 255, 0.1);
          box-shadow: inset 0px 0px vh(8) 0px rgba(0, 130, 255, 0.32);
          font-weight: 400;
          font-size: vw(16);
          color: #5e7ea6;
          line-height: vh(22);
          text-align: left;
          font-style: normal;
          padding: vh(8) vh(12);
        }

        .datePick {
          width: vw(245);
          height: vh(38);

          :deep(.el-input) {
            width: 100%;
            height: 100%;
            border: none;
            background: rgba(0, 112, 255, 0.1);

            .el-input__wrapper {
              background: rgba(0, 112, 255, 0.1);
              box-shadow: inset 0px 0px vh(8) 0px rgba(0, 130, 255, 0.32);
              font-weight: 400;
              font-size: vw(16);
              color: #5e7ea6;
              line-height: vh(22);
              text-align: left;
              font-style: normal;
              padding: vh(8) vh(12);
            }
          }
        }

        .btn {
          width: vw(72);
          height: vh(38);
          background: linear-gradient(
            180deg,
            rgba(1, 16, 42, 0.33) 0%,
            #0a356d 100%
          );
          border: 1px solid;
          border-image: linear-gradient(
              80deg,
              rgba(16, 35, 72, 1),
              rgba(55, 104, 186, 1)
            )
            1 1;
          outline: none;
          font-weight: 400;
          font-size: vw(16);
          color: #d1dfe9;
          text-align: center;
          line-height: vh(38);
          font-style: normal;
          margin-right: vw(32);
          border: none;
        }
      }
    }

    .addBtn {
      background: url(../../assets/image/add_bg.png) top left no-repeat;
      background-size: 100% auto;
      width: vw(170);
      height: vh(42);
      text-align: center;
      line-height: vh(42);
      font-size: vw(16);
      color: #fff;
      letter-spacing: vw(2);
      font-style: normal;
      cursor: pointer;
    }
  }

  .tableBox {
    width: vw(1760);
    height: vh(700);
    margin-top: vh(22);

    :deep(.el-table) {
      background-color: transparent;

      .el-table__inner-wrapper {
        &::before {
          content: none;
        }

        .el-table__header {
          backdrop-filter: blur(2px);

          thead {
            tr {
              background: linear-gradient(
                270deg,
                rgba(0, 113, 255, 0) 0%,
                rgba(0, 145, 255, 0.2) 52%,
                rgba(0, 109, 255, 0) 100%
              );
              backdrop-filter: blur(2px);

              th {
                background: transparent;
                border: none;

                .cell {
                  background: transparent;
                  font-weight: 600;
                  font-size: vw(22);
                  color: #f2fbff;
                  font-style: normal;
                  min-height: vh(46);
                }
              }
            }
          }
        }

        .el-table__body-wrapper {
          margin-top: vh(12);
          background: transparent;

          .el-table__body {
            background-color: transparent;

            tbody {
              overflow: hidden;

              .el-table__row {
                &:nth-child(odd) {
                  background: linear-gradient(
                    270deg,
                    rgba(0, 113, 255, 0) 0%,
                    rgba(33, 55, 89, 0.2) 52%,
                    rgba(0, 109, 255, 0) 100%
                  );
                }

                &:nth-child(even) {
                  background: linear-gradient(
                    270deg,
                    rgba(0, 113, 255, 0) 0%,
                    rgba(12, 72, 162, 0.2) 52%,
                    rgba(0, 109, 255, 0) 100%
                  );
                }

                backdrop-filter: blur(2px);
                margin-bottom: vh(8);

                td {
                  background: transparent;
                  border: none;

                  .cell {
                    min-height: vh(60);
                    font-weight: 400;
                    font-size: vw(20);
                    color: #d0e8ff;
                    line-height: vh(60);
                    font-style: normal;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .paginationBox {
    margin-top: vh(100);
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
          background: url(../../assets/image/prev.png) top left no-repeat;
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
          background: url(../../assets/image/next.png) top left no-repeat;
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
