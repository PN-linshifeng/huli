<template>
  <div class="work-create">
    <p class="page-title">
      <span>作品管理 ></span>
      <span class="current-page">创建作品</span>
    </p>
    <div class="creat-info">
      <Step :data="[{title:'选择类型'},{title:'完善作品信息'},{title:'创建成功'}]" :active="activeStep" />

      <first-step v-if="activeStep === 0" />
      <second-step v-else-if="activeStep === 1" />
      <third-step v-else />
      <div v-if="activeStep === 0" class="create-btn">
        <el-button size="small" type="primary" @click="toNextStep">下一步</el-button>
      </div>
      <div v-else-if="activeStep === 1" class="create-btn">
        <el-button size="small" class="info-btn" @click="toLastStep">上一步</el-button>
        <el-button size="small" type="primary" @click="createdWork">创建作品</el-button>
      </div>
      <div v-else class="create-btn">
        <el-button size="small" type="primary">为作品写新章节</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
import Step from '@/components/Step/Index.vue';
import FirstStep from './components/FirstStep.vue';
import SecondStep from './components/SecondStep.vue';
import ThirdStep from './components/ThirdStep.vue';

export default {
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    Step,
  },
  data() {
    return {
      activeStep: 0,
    };
  },
  methods: {
    toLastStep() {
      this.activeStep -= 1;
    },
    toNextStep() {
      this.activeStep += 1;
    },
    createdWork() {
      // 调用接口保存成功后跳转下一步
      this.activeStep += 2;
    },
  },
};
</script>
