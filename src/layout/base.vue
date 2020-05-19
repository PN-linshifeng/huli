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
