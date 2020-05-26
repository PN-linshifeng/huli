<template>
  <div class="has-topber has-aside">
    <base-header class="hidden-xs-only" />
    <mobile-header class="hidden-sm-and-up" />
    <el-row class="container main-wrap">
      <el-col :md="4" :sm="5" class="main-left hidden-xs-only">
        <base-aside class="hidden-xs-only" />
      </el-col>
      <el-col :md="20" :sm="19" class="main-right">
        <router-view class="view-page" />
      </el-col>
    </el-row>
    <base-footer />
  </div>
</template>
<script>
import BaseHeader from './../components/Header/index';
import BaseAside from './../components/Aside/index';
import BaseFooter from './../components/Footer/index';
import MobileHeader from './../components/Mobile/index';
import './style.scss'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseAside,
    BaseFooter,
    MobileHeader
  },
};
</script>
