<template>
  <div class="has-topber has-aside">
    <base-header />
    <div class="container main-wrap">
      <div class="main-left">
        <base-aside />
      </div>
      <div class="main-right">
        <router-view class="view-page" />
      </div>
    </div>
    <base-footer />
  </div>
</template>
<script>
import BaseHeader from './components/Header/index';
import BaseAside from './components/Aside/index';
import BaseFooter from './components/Footer/index';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseAside,
    BaseFooter,
  },
};
</script>
<style lang="scss">
.main-wrap {
  margin-bottom: 20px !important;
  overflow: hidden;
}
.main-left {
  width: 200px;

  float: left;

  padding-bottom: 2000px;
  margin-bottom: -2000px;
  margin-right: 20px;
  background: #ffffff;
}
.main-right {
  overflow: hidden;
  padding-bottom: 2000px;
  margin-bottom: -2000px;
  .main-height {
    min-height: 700px;
    background: #ffffff;
  }
  // background: #ffffff;
}
</style>
