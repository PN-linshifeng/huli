<template>
  <div class="has-topber has-aside">
    <base-header />
    <el-row class="container main-wrap">
      <el-col :md="4" class="main-left">
        <base-aside />
      </el-col>
      <el-col :md="20" class="main-right">
        <router-view class="view-page" />
      </el-col>
    </el-row>
    <base-footer />
  </div>
</template>
<script>
import BaseHeader from './components/Header/index';
import BaseAside from './components/Aside/index';
import BaseFooter from './components/Footer/index';
import './style.scss'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseAside,
    BaseFooter,
  },
};
</script>
