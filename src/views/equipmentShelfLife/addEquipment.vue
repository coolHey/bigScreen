<template>
  <div class="addEquipment">
    <div class="addBox">
      <h3 class="title">新增质保设备</h3>
      <div class="formData">
        <ul>
          <li>
            <div class="label">设备出厂编号：</div>
            <input type="text" v-model="submitData.factoryId" name="" id="" class="inp" placeholder="请输入" />
          </li>
          <li>
            <div class="label">设备ID：</div>
            <input type="text" name="" v-model="submitData.id" id="" class="inp" placeholder="请输入" />
          </li>
          <li>
            <div class="label">设备起始日：</div>
            <div class="datePick">
              <el-date-picker v-model="submitData.factoryDate" type="datetime" start-placeholder="开始日期"
                end-placeholder="结束日期" :default-time="defaultTime1">
              </el-date-picker>
            </div>
          </li>
          <li>
            <div class="label">设备到期日：</div>
            <div class="datePick">
              <el-date-picker v-model="submitData.warrantyDate" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </li>
          <li>
            <div class="label">质保期：</div>
            <input type="text" v-model="submitData.warrantySpan" name="" id="" class="inp" placeholder="请输入" />
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
import { upDateShelfLife } from '@/api/shelfLife';
export default {
  props: ['updateData'],
  data() {
    return {
      submitData: {
        id: '', // 设备id
        factoryId: '', // 设备出厂编号
        factoryDate: '', // 设备起始日
        warrantyDate: '', // 质保到期日
        warrantySpan: '', // 质保期
      }
    };
  },
  mounted() {
    console.log(this.updateData);
    this.submitData = Object.assign(this.submitData, this.updateData)
  },
  methods: {
    doSubmit(idx) {
      if (idx == 1) {
        this.$emit("doSubmit", idx);
        this.reset()
        return
      }
      upDateShelfLife(this.submitData).then(res => {
        if (res.code == 200) {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.reset()
          this.$emit("doSubmit", idx);
        } else {
          this.$message({
            message: '操作失败',
            type: 'warning'
          });
        }
      })
    },
    reset() {
      this.submitData = {
        id: '', // 设备id
        factoryId: '', // 设备出厂编号
        factoryDate: '', // 设备起始日
        warrantyDate: '', // 质保到期日
        warrantySpan: '', // 质保期
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.addEquipment {
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
    height: vh(446);
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
                background: url(../../assets/image/inp_bg.png) top left no-repeat;
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
        cursor: pointer;
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
