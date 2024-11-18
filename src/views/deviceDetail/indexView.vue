<template>
  <div class="container">
    <div class="filter">
      <ul>
        <li>
          <span class="label">设备ID：</span>
          <input type="text" v-model="filterData.id" placeholder="请输入" class="inp" />
        </li>
        <li>
          <span class="label">质保日期：</span>
          <div class="datePick">
            <el-date-picker v-model="filterData.warrantyDate" value-format="YYYY-MM-DD HH:mm:ss" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </li>
        <li>
          <button class="btn" @click="handleQuery">查询</button>
          <button class="btn" @click="handleReset">重置</button>
        </li>
      </ul>
      <div class="addBtn" @click="showAdd = true">新增设备</div>
    </div>
    <div class="tableBox">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" align="center" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="province" align="center" label="省" show-overflow-tooltip></el-table-column>
        <el-table-column prop="city" align="center" label="市" show-overflow-tooltip></el-table-column>
        <el-table-column prop="district" align="center" label="区/县" show-overflow-tooltip></el-table-column>
        <el-table-column prop="type" align="center" label="设备型号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="factoryId" align="center" label="出厂编号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="factoryDate" align="center" label="出厂日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="debugDate" align="center" label="调试日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="client" align="center" label="客户名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="id" align="center" label="设备ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" align="center" label="操作" width="125">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑
            </el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationBox">
      <el-pagination :current-page.sync="filterData.pn" @size-change="handleSizeChange" @current-change="handleCurrentChange" :total="filterData.total" background
        layout="total, prev, pager, next">
      </el-pagination>
    </div>
    <!-- <div class="addDialog"> -->
    <!-- </div> -->
    <add-device-view @doSubmit="closeDialog(idx)" v-if="showAdd" :data="editData"></add-device-view>
  </div>
</template>

<script>
import addDeviceView from "./addDevice.vue";
import { getListData, deleteDevice } from '@/api/device'
export default {
  components: {
    addDeviceView,
  },
  data() {
    return {
      value1: "",
      region: "",
      showAdd: false,
      tableData: [],
      filterData: {
        pn: 1,
        size: 10,
        total: 0,
        warrantyDate: '', // 质保日期
        id: '', // 设备编号
      },
      editData: {}
    };
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取数据
    getList() {
      getListData(this.filterData).then(res => {
        if (res.code == 200) {
          this.tableData = res.data.records
          this.filterData.total = res.data.total
          this.filterData.pn = res.data.current
        } else {
          this.$message({
            message: '获取数据失败',
            type: 'warning'
          });
        }
      })
    },

    // 删除设备
    handleDelete(row) {
      deleteDevice({ id: row.id }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getList()
        } else {
          this.$message({
            message: '删除失败',
            type: 'warning'
          });
        }
      })
    },

    // 查询
    handleQuery() {
      this.getList()
    },
    // 重置

    handleReset() {
      this.filterData.warrantyDate = ''
      this.filterData.id = ''
    },

    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.filterData.pn = val
      this.getList()
    },
    handleClick(row) {
      this.editData = row
      console.log(row);
    },
    closeDialog(idx) {
      this.showAdd = false;
      this.editData = null
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
          cursor: pointer;
          background: linear-gradient(180deg,
              rgba(1, 16, 42, 0.33) 0%,
              #0a356d 100%);
          border: 1px solid;
          border-image: linear-gradient(80deg,
              rgba(16, 35, 72, 1),
              rgba(55, 104, 186, 1)) 1 1;
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
              background: linear-gradient(270deg,
                  rgba(0, 113, 255, 0) 0%,
                  rgba(0, 145, 255, 0.2) 52%,
                  rgba(0, 109, 255, 0) 100%);
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
                  background: linear-gradient(270deg,
                      rgba(0, 113, 255, 0) 0%,
                      rgba(33, 55, 89, 0.2) 52%,
                      rgba(0, 109, 255, 0) 100%);
                }

                &:nth-child(even) {
                  background: linear-gradient(270deg,
                      rgba(0, 113, 255, 0) 0%,
                      rgba(12, 72, 162, 0.2) 52%,
                      rgba(0, 109, 255, 0) 100%);
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
            background: linear-gradient(270deg,
                rgba(0, 105, 255, 0) 0%,
                rgba(62, 135, 255, 0.43) 100%);
            border: 1px solid;
            border-image: linear-gradient(136deg,
                rgba(183, 217, 255, 1),
                rgba(53, 149, 255, 1),
                rgba(145, 198, 255, 1),
                rgba(0, 118, 246, 1)) 1 1;
          }
        }
      }
    }
  }
}
</style>
