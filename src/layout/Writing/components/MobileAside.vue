<template>
  <div class="mobile-writing-header">
    <el-row>
      <el-col :span="20">
        <router-link to="/index" class="writing-alink">
          <img src="../../../assets/images/logo.png" alt="狐狸写作平台" class="writing-logo" />
        </router-link>
        <el-divider direction="vertical" />
        <p class="book-name">作品《{{ bookname }}》</p>
      </el-col>
      <el-col :span="4" class="collsip-btn">
        <!-- <span class="menu-icon-btn el-icon-s-fold" /> -->
        <el-button type="text" class="show-btn" @click="showMenuList">
          <span :class="btnClass" />
        </el-button>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="mobileMenuShow"
      direction="ltr"
      :show-close="false"
      class="mobile-menus"
      size="70%"
      :append-to-body="true"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <router-link :to="`/writing/${bookname}/draft`" tag="div" :class="pathType === '0' ? 'book-bin active-bg' : 'book-bin'">
            <span class="iconfont hulizu2491" />
            <p>草稿箱</p>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="`/writing/${bookname}/recycle`" tag="div" :class="pathType === '1' ? 'book-bin active-bg' : 'book-bin'">
            <span class="iconfont hulirecovery" />
            <p>回收站</p>
          </router-link>
        </el-col>
        <el-col :span="8">
          <router-link :to="`/writing/${bookname}/published`" tag="div" :class="pathType === '2' ? 'book-bin active-bg' : 'book-bin'">
            <span class="iconfont hulizu2493" />
            <p>已发布</p>
          </router-link>
        </el-col>
      </el-row>
      <writing-aside :path="path" />
    </el-drawer>
  </div>
</template>

<script>
import WritingAside from './Aside.vue';
import './mobile.scss';

export default {
  components: {
    WritingAside
  },
  props: {
    bookname: {
      type: String,
      // required: true,
      default: '4'
    },
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mobileMenuShow: false,
      btnClass: 'iconfont hulizu2491',
      pathType: '0'
    }
  },
  watch: {
    '$route.path': function(val) {
      if (val) {
        this.mobileMenuShow = false;
        if (val.indexOf('draft') > -1) {
          this.pathType = '0';
          this.btnClass = 'iconfont hulizu2491';
        }
        if (val.indexOf('recycle') > -1) {
          this.pathType = '1';
          this.btnClass = 'iconfont hulirecovery';
        }
        if (val.indexOf('published') > -1) {
          this.pathType = '2';
          this.btnClass = 'iconfont hulizu2493';
        }
      }
    }
  },
  methods: {
    showMenuList() {
      console.log('a');
      this.mobileMenuShow = true;
    }
  }
}
</script>
