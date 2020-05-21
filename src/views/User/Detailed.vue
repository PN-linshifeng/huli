<template>
  <div>
    <el-form ref="infoForm" :data="info" label-width="130px" class="infoForm">
      <el-form-item label="职业状态：">
        <span v-if="!isEdit">{{ jobText }}</span>
        <el-select v-else v-model="infoForm.job">
          <el-option v-for="k in job" :key="k.label" :value="k.value" :label="k.label" />
        </el-select>
      </el-form-item>
      <el-form-item label="教育程度：">
        <span v-if="!isEdit">{{ diplomaText }}</span>
        <el-select v-else v-model="infoForm.diploma">
          <el-option v-for="k in diploma" :key="k.label" :value="k.value" :label="k.label" />
        </el-select>
      </el-form-item>
      <el-form-item label="毕业学校：">
        <span v-if="!isEdit">{{ info.school }}</span>
        <el-input v-else v-model="infoForm.school" />
      </el-form-item>

      <el-form-item label="是否协作会员：">
        <span v-if="!isEdit">{{ info.member==='1'?'是':'否' }}</span>
        <span v-else>
          <el-radio v-model="infoForm.member" label="1">是</el-radio>
          <el-radio v-model="infoForm.member" label="0">否</el-radio>
        </span>
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
      <div class="txt">资料修改成功</div>
      <div>
        <el-button type="primary" size="small" @click="successVisible = false">确 认</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="errorVisible" width="250px" class="dialog-error">
      <div>
        <i class="el-icon-warning-outline" />
      </div>
      <div class="txt">资料修改失败，请稍后再试！</div>
      <div>
        <el-button type="primary" size="small" @click="errorVisible = false">确 认</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
const job = [
  { value: 1, label: '学生' },
  { value: 2, label: '上班族' },
];
const diploma = [
  { value: 1, label: '初中' },
  { value: 2, label: '高中' },
];
export default {
  data() {
    return {
      isEdit: false,
      job,
      diploma,
      infoForm: {},
      info: {
        job: 1,
        diploma: 1,
        school: '北京大学',
        member: '1',
      },
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
