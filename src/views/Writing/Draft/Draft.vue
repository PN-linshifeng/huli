<template>
  <div class="writing-draft">
    <el-row class="writing-area" :gutter="20">
      <el-col :sm="5" class="writing-asider">
        <p class="total-capters">共{{ totalNum }}个章节</p>
        <el-divider />
        <writing-asider :path="path" />
      </el-col>
      <el-col :sm="19" class="writing-main">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './style.scss';
import writingAsider from '../components/Aside';

export default {
  components: {
    writingAsider
  },
  data() {
    return {
      totalNum: 3,
      path: ''
    }
  },
  created() {
    this.path = this.$route.path;
  }
}
</script>
