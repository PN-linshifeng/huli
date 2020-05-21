<template>
  <div>
    <el-form ref="passwordForm" :data="passwordForm" label-width="130px" class="infoForm">
      <el-form-item label="旧密码：">
        <el-input v-model="passwordForm.oldPassword" show-password />
      </el-form-item>
      <el-form-item label="输入新密码：">
        <el-input v-model="passwordForm.newPassword" show-password />
      </el-form-item>
      <el-form-item label="确认新密码：">
        <el-input v-model="passwordForm.confirmPassword" show-password />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
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
export default {
  data() {
    return {
      passwordForm: { oldPassword: undefined, newPassword: undefined, confirmPassword: undefined },
      successVisible: false,
      errorVisible: false,
    };
  },
  computed: {
    jobText: function() {
      const txt = this.job.find(v => v.value === this.info.job);
      return txt.label;
    },
    diplomaText: function() {
      const txt = this.diploma.find(v => v.value === this.info.diploma);
      return txt.label;
    },
  },
  methods: {
    handleEdit(fal) {
      this.isEdit = !this.isEdit;
      if (!fal) {
        this.infoForm = { ...this.info };
      }
    },
    handleSubmit() {
      this.info = { ...this.infoForm };
      this.isEdit = !this.isEdit;
      this.successVisible = true;
    },
  },
};
</script>
