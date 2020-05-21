<template>
  <div>
    <el-form ref="infoForm" :data="info" label-width="120px" class="infoForm">
      <el-form-item label="银行名称：">
        <div v-if="!isEdit">{{ bankNameText }}</div>
        <el-select v-else v-model="infoForm.bankName">
          <el-option v-for="k in bankName" :key="k.label" :value="k.value" :label="k.label" />
        </el-select>
      </el-form-item>
      <el-form-item label="开户名：">
        <span v-if="!isEdit">{{ info.name }}</span>
        <el-input v-else v-model="infoForm.name" />
      </el-form-item>
      <el-form-item label="银行账户：">
        <span v-if="!isEdit">{{ info.account }}</span>
        <el-input v-else v-model="infoForm.account" />
      </el-form-item>
      <el-form-item label="银行所在地：">
        <div v-if="!isEdit">
          <span v-for="(value,key) in info.address" :key="key" class="padding">{{ value }}</span>
        </div>
        <el-cascader
          v-else
          ref="address"
          v-model="infoForm.address"
          :options="bankAddList"
          :props="{ expandTrigger: 'hover' }"
          @change="handleAddressChange"
        />
      </el-form-item>

      <el-form-item label="手机号码：">
        <div v-if="!isEdit">
          <span class="padding">{{ info.telRegion }}</span>
          <span>{{ info.tel }}</span>
        </div>
        <div v-else class="tel-box">
          <el-input v-model="infoForm.tel" placeholder class="tel" />
          <el-link type="info">获取验证码</el-link>
          <el-input v-model="infoForm.code" placeholder class="code" />
        </div>
      </el-form-item>

      <el-form-item>
        <el-button v-if="!isEdit" type="primary" @click="handleEdit()">修改</el-button>
        <div v-else>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button type="default" @click="handleEdit(false)">取消</el-button>
        </div>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="successVisible" width="250px" class="dialog-success">
      <div>
        <i class="el-icon-circle-check" />
      </div>
      <div class="txt">密码修改成功</div>
      <div>
        <el-button type="primary" size="small" @click="successVisible = false">确 认</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="errorVisible" width="250px" class="dialog-error">
      <div>
        <i class="el-icon-warning-outline" />
      </div>
      <div class="txt">密码修改失败，请稍后再试！</div>
      <div>
        <el-button type="primary" size="small" @click="errorVisible = false">确 认</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const bankName = [
  { value: 1, label: '中国银行' },
  { value: 2, label: '农业银行' },
];
const bankAddList = [
  {
    value: 'gd',
    label: '广东省',
    children: [
      {
        value: 'sz',
        label: '深圳市',
        children: [
          {
            value: 'ba',
            label: '宝安区',
            children: [
              {
                value: 'anca',
                label: '沙井支行',
              },
            ],
          },
          {
            value: 'ns',
            label: '南山区',
            children: [
              {
                value: 'ancs',
                label: '路径支行',
              },
            ],
          },
        ],
      },
      {
        value: 'gz',
        label: '广州市',
        children: [
          {
            value: 'by',
            label: '白云区',
            children: [
              {
                value: 'ancs',
                label: '沙快乐支行',
              },
            ],
          },
          {
            value: 'yx',
            label: '越秀区',
            children: [
              {
                value: 'ansc',
                label: '沙的井支行',
              },
            ],
          },
        ],
      },
    ],
  },
];
export default {
  data() {
    return {
      isEdit: false,
      bankName,
      bankAddList,
      infoForm: {},
      info: {
        bankName: 1,
        name: '陈丽丽',
        account: '12151512*****',
        address: { gd: '广东省', sz: '深圳市', ba: '宝安区', anca: '沙井支行' },
        tel: '1379966554',
      },
      successVisible: false,
      errorVisible: false,
    };
  },
  computed: {
    bankNameText: function() {
      const text = this.bankName.find(k => k.value === this.info.bankName);
      return text.label;
    },
  },
  methods: {
    handleAddressChange(value) {
      console.log(value, this.$refs.address.getCheckedNodes()[0].pathLabels);
    },
    handleEdit(fal) {
      this.isEdit = !this.isEdit;
      if (!fal) {
        const address = this.info.address && Object.keys(this.info.address);
        this.infoForm = { ...this.info, address };
      }
    },
    handleSubmit() {
      this.successVisible = true;
      this.isEdit = !this.isEdit;
    },
  },
};
</script>
