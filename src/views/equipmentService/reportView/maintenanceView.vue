<template>
  <div class="dataAnalysis">
    <div class="filter">
      <ul>
        <li>
          <span class="label">设备ID：</span>
          <input
            type="text"
            placeholder="请输入"
            class="inp"
            v-model="form.monitorId"
          />
        </li>
        <!-- <li>
          <span class="label">质保日前：</span>
          <div class="datePick">
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </div>
        </li> -->
        <li>
          <button class="btn" @click="doSearch">查询</button>
          <button class="btn" @click="exportData">导出</button>
        </li>
      </ul>
      <!-- <div class="addBtn">新增设备</div> -->
    </div>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          prop="monitorId"
          align="center"
          label="设备ID"
          show-overflow-tooltip
        >
          <template #default="scope">
            <div @click="getCurrentScope(scope)">
              <span>{{ scope.row.msg.msgTime }}</span>
              <span class="warning"> 需要维保，请及时处理</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="runTime"
          align="center"
          label="总运行时常"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="runCount"
          align="center"
          label="运行次数"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="msg.msgTime"
          align="center"
          label="提醒时间"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >提醒
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationBox">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :total="total"
        :current-page="pagination.pn"
        :page-size="pagination.size"
        background
        layout="total, prev, pager, next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getMaintainData, postNotice } from "@/api/afterSales";
import { download } from "@/utils/download";
import { ElMessage } from "element-plus";
import QueryString from "qs";

export default {
  data() {
    return {
      tableData: [],
      form: {
        monitorId: "",
      },
      pagination: {
        pn: 1,
        size: 10,
      },
      total: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await getMaintainData({
        ...this.pagination,
        ...this.form,
      });
      if (res.code === 200) {
        this.tableData = res.data.records;
        this.total = res.data.total;
      }
    },
    doSearch() {
      this.getData();
    },
    exportData() {
      download(
        "http://146.56.215.178:9999/msg/maintainExport?" +
          QueryString.stringify({
            ids: JSON.stringify(this.tableData.map((item) => item.id)),
          })
      );
    },
    async handleClick(row) {
      const res = await postNotice(row.id);
      if (res.code === 200) {
        ElMessage.success("提醒成功");
      } else {
        ElMessage.error(res.message);
      }
    },
    handleSizeChange(val) {
      this.pagination.size = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pagination.pn = val;
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.dataAnalysis {
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: vh(20);
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
      background: url(../../../assets/image/add_bg.png) top left no-repeat;
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
    width: 100%;
    height: vh(750);
    // margin-top: vh(22);
    :deep(.el-table) {
      background-color: transparent;
      .warning {
        font-weight: 400;
        font-size: vw(20);
        color: #ffb500;
        line-height: vh(28);
        text-align: left;
      }
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
    margin-top: vh(32);
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
          background: url(../../../assets/image/prev.png) top left no-repeat;
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
          background: url(../../../assets/image/next.png) top left no-repeat;
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
