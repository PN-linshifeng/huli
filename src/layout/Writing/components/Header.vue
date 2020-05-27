<template>
  <div class="writing-header">
    <el-row>
      <el-col :sm="12">
        <router-link to="/index" class="writing-alink">
          <img src="../../../assets/images/logo.png" alt="狐狸写作平台" class="writing-logo" />
        </router-link>
        <el-divider direction="vertical" />
        <p class="book-name">作品《{{ bookname }}》</p>
      </el-col>
      <el-col :span="3">
        <router-link :to="`/writing/${bookname}/draft`" tag="div" :class="pathType === '0' ? 'book-bin active-bg' : 'book-bin'">
          <span class="iconfont hulizu2491" />
          <p>草稿箱</p>
        </router-link>
      </el-col>
      <el-col :span="3">
        <router-link :to="`/writing/${bookname}/recycle`" tag="div" :class="pathType === '1' ? 'book-bin active-bg' : 'book-bin'">
          <span class="iconfont hulirecovery" />
          <p>回收站</p>
        </router-link>
      </el-col>
      <el-col :span="3">
        <router-link :to="`/writing/${bookname}/published`" tag="div" :class="pathType === '2' ? 'book-bin active-bg' : 'book-bin'">
          <span class="iconfont hulizu2493" />
          <p>已发布</p>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './style.scss';

export default {
  props: {
    bookname: {
      type: String,
      // required: true,
      default: '4'
    }
  },
  computed: {
    pathType: function() {
      const path = this.$route.path;
      let result = '';
      if (path.indexOf('draft') > -1) {
        result = '0';
      }
      if (path.indexOf('recycle') > -1) {
        result = '1';
      }
      if (path.indexOf('published') > -1) {
        result = '2';
      }
      return result
    }
  }
}
</script>
