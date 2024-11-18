<template>
  <div class="container">
    <div class="filter">
      <ul>
        <li>
          <span class="label">设备ID：</span>
          <input type="text" placeholder="请输入" class="inp" />
        </li>
        <li>
          <button class="btn">查询</button>
          <button class="btn">重置</button>
        </li>
      </ul>
      <div class="addBtn">一键导出</div>
    </div>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          label="序号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="客户编号"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="客户名称"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="地址"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="联系人"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="联系电话"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="销售员"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="时间"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="售后服务记录售后人员"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="次数"
        ></el-table-column>
        <el-table-column
          prop="address"
          align="center"
          show-overflow-tooltip
          label="结果"
        ></el-table-column>
        <el-table-column prop="address" align="center" label="操作">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑
            </el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="1000"
        background
        layout="total, prev, pager, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      region: "",
      tableData: [
        {
          date: "0001",
          name: "王麻子",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "0002",
          name: "王麻子",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "0003",
          name: "王麻子",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "0004",
          name: "王麻子",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
                  line-height: vh(46);
                  display: flex;
                  justify-content: center;
                  align-items: center;
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
                    height: vh(60);
                    font-weight: 400;
                    font-size: vw(20);
                    color: #d0e8ff;
                    font-style: normal;
                    line-height: vh(60);
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
