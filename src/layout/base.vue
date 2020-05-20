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
  margin-bottom: 1.25rem /* 20/16 */ !important;
  overflow: hidden;
}
.main-left {
  width: 12.5rem /* 200/16 */;
  float: left;

  padding-bottom: 125rem /* 2000/16 */;
  margin-bottom: -125rem /* 2000/16 */;
  margin-right: 20px;
  background: #ffffff;
}
.main-right {
  overflow: hidden;
  padding: 1.5rem 1rem 125rem /* 2000/16 */;
  margin-bottom: -125rem /* 2000/16 */;
  background: #ffffff;
}
</style>
