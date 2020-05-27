<template>
  <div class="writing-layout">
    <!-- header -->
    <div class="writing-header">
      <el-row class="writing-area">
        <el-col :sm="18" :lg="12">
          <writing-header :bookname="bookname" :path="path" class="hidden-xs-only" />
          <mobile-aside :bookname="bookname" :path="path" class="hidden-sm-and-up" />
        </el-col>
      </el-row>
    </div>
    <el-row class="writing-area">
      <el-col :sm="5" class="hidden-xs-only writing-aside-menu">
        <writing-aside :path="path" />
      </el-col>
      <el-col :sm="19">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import WritingHeader from './components/Header';
import WritingAside from './components/Aside';
import MobileAside from './components/MobileAside';
import './style.scss';

export default {
  name: 'Writing',
  components: {
    WritingHeader,
    WritingAside,
    MobileAside
  },
  data() {
    return {
      bookname: '',
      path: ''
    }
  },
  watch: {
    '$route.path': function(val) {
      this.path = val;
    }
  },
  created() {
    // this.path = this.$route.path;
    this.bookname = this.$route.params.bookname;
  }
}
</script>
