<template>
  <div class="editCustomer">
    <div class="addBox">
      <h3 class="title">编辑客户档案</h3>
      <div class="formData">
        <ul>
          <li>
            <div class="label">客户名称：</div>
            <input
              type="text"
              v-model="submitData.clientName"
              name=""
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">客户地址：</div>
            <input
              type="text"
              name=""
              v-model="submitData.clientAddress"
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">联系人：</div>
            <input
              type="text"
              name=""
              v-model="submitData.contactPerson"
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">联系电话：</div>
            <input
              type="text"
              name=""
              v-model="submitData.contactPhone"
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">销售员：</div>
            <input
              type="text"
              name=""
              v-model="submitData.salesClerk"
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">销售时间：</div>
            <div class="datePick">
              <el-date-picker
                v-model="submitData.saleTime"
                start-placeholder="开始日期"
              >
              </el-date-picker>
            </div>
          </li>
          <li>
            <div class="label">售后人员：</div>
            <input
              type="text"
              v-model="submitData.afterSales"
              name=""
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">售后次数：</div>
            <input
              type="text"
              v-model="submitData.afterSalesCount"
              name=""
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
          <li>
            <div class="label">结果：</div>
            <input
              type="text"
              v-model="submitData.result"
              name=""
              id=""
              class="inp"
              placeholder="请输入"
            />
          </li>
        </ul>
      </div>
      <div class="btns">
        <div class="btn" @click="doSubmit(1)">取消</div>
        <div class="btn" @click="doSubmit(2)">完成</div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateCustomer } from "@/api/customerProfile";
export default {
  props: ["updateData"],
  data() {
    return {
      submitData: {
        id: "", // 客户编号
        clientName: "", // 客户名称
        clientAddress: "", // 客户地址
        contactPerson: "", // 联系人
        contactPhone: "", // 联系电话
        salesClerk: "", // 销售员
        saleTime: "", // 销售时间
        afterSales: "", // 售后人员
        afterSalesCount: "", // 售后次数
        result: "", // 结果
      },
    };
  },
  mounted() {
    console.log(this.updateData);
    this.submitData = Object.assign(this.submitData, this.updateData);
  },
  methods: {
    doSubmit(idx) {
      if (idx == 1) {
        this.$emit("doSubmit");
        this.reset();
        return;
      }
      updateCustomer(this.submitData).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.reset();
          this.$emit("doSubmit");
        } else {
          this.$message({
            message: "操作失败",
            type: "warning",
          });
        }
      });
    },
    reset() {
      this.submitData = Object.keys(this.submitData).forEach((key) => {
        this.submitData[key] = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.editCustomer {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .addBox {
    width: vw(940);
    height: vh(646);
    background: url(../../assets/image/addEquipment_bg.png) top left no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .title {
      font-size: vw(20);
      color: #fff;
      line-height: vh(23);
      letter-spacing: vw(2);
      text-shadow: 0px vh(2) vw(4) rgba(0, 42, 81, 0.64);
      font-style: normal;
      margin: vh(15) 0 0 vw(38);
    }

    .formData {
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        padding: vh(25) vw(40);

        li {
          margin-bottom: vh(24);

          .label {
            font-size: vw(18);
            color: #fff;
            line-height: vh(21);
            letter-spacing: vw(1);
            font-style: normal;
            text-transform: none;
            margin-bottom: vh(8);
          }

          .datePick {
            width: vw(410);
            height: vh(40);

            :deep(.el-date-editor) {
              background: transparent;
              width: 100%;
              height: 100%;
              background: url(../../assets/image/inp_bg.png) top left no-repeat;
              background-size: 100% 100%;
              border: none;
              box-shadow: none;
              padding: 0;

              .el-icon {
                display: none;
              }

              .el-input__wrapper {
                width: 100%;
                height: 100%;
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
            width: vw(376);
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
        }
      }
    }

    .btns {
      display: flex;
      justify-content: center;
      align-items: center;

      .btn {
        width: vw(168);
        height: vh(40);
        background-size: 100% 100%;
        text-align: center;
        line-height: vh(40);
        font-size: 18px;
        color: #fff;
        letter-spacing: vw(1);
        font-style: normal;

        &:nth-of-type(1) {
          background: url(../../assets/image/cancel_bg.png) top left no-repeat;
          margin-right: vw(122);
        }

        &:nth-of-type(2) {
          background: url(../../assets/image/add_bg.png) top left no-repeat;
        }
      }
    }
  }
}
</style>
