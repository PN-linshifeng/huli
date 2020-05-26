<template>
  <div class="mobile-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../../../assets/images/logo.png" alt="狐狸小说" width="40" />
          <span>作者专区</span>
        </router-link>
      </div>
      <div class="right">
        <div @click="openMenus">
          <img src="../../../assets/images/avatar.png" alt="xxx头像" />
        </div>
      </div>
    </div>
    <el-drawer
      :visible.sync="mobileMenuShow"
      direction="ltr"
      :show-close="false"
      class="mobile-menus"
      size="70%"
      :append-to-body="true"
    >
      <mobile-aside />
    </el-drawer>
  </div>
</template>

<script>
import MobileAside from '../Aside/index';
import './style.scss';

export default {
  components: {
    MobileAside
  },
  data() {
    return {
      mobileMenuShow: false
    }
  },
  watch: {
    $route(to, from) {
      this.mobileMenuShow = false;
    }
  },
  methods: {
    openMenus() {
      this.mobileMenuShow = true;
    }
  }

}
</script>
