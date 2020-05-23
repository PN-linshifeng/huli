<template>
  <div class="writing-layout">
    <!-- header -->
    <el-row class="writing-area">
      <el-col :sm="18" :lg="12">
        <writing-header :bookname="bookname" />
      </el-col>
    </el-row>
    <el-row class="writing-area">
      <router-view />
    </el-row>
  </div>
</template>

<script>
import WritingHeader from './components/Header';
import './style.scss';

export default {
  name: 'Writing',
  components: {
    WritingHeader
  },
  data() {
    return {
      bookname: '',
    }
  },
  created() {
    this.bookname = this.$route.params.bookname;
  }
}
</script>
