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
      <div class="top-info">
        <img src="../../../assets/images/avatar.png" alt="" />
        <div>
          <router-link to="/">立即写作</router-link>
          <router-link to="/user">个人资料</router-link>
        </div>
      </div>
      <mobile-aside />
      <div class="bottom-opera">
        <router-link to="/welfare">
          <img src="../../../assets/images/fuli.png" alt="作者福利" />
        </router-link>
        <router-link to="/message">
          <img src="../../../assets/images/message.png" alt="消息" />
          <!-- <el-badge :value="9" class="mark" /> -->
        </router-link>
        <router-link to="/login">
          <i class="el-icon-setting" />
        </router-link>
      </div>
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
