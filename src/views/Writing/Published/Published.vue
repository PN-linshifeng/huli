<template>
  <div class="writing-published">
    <el-row class="writing-area" :gutter="20">
      <el-col :sm="5" class="writing-asider">
        <div class="total-capters">本书共{{ totalNum }}卷，3章
          <el-button size="mini" type="primary" plain class="new-chapter-btn">新建卷</el-button>
        </div>
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
