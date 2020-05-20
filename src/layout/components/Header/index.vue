<template>
  <div class="container-full header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../../../assets/images/logo.png" alt="狐狸小说" width="40" />
          <span>作者专区</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/">
          <img src="../../../assets/images/fuli.png" alt="作者福利" width="18" height="18" />作者福利
        </router-link>
        <router-link to="/message">
          <img src="../../../assets/images/message.png" alt="消息" width="18" height="18" />
          <span>消息</span>
          <el-badge :value="9" class="mark" />
        </router-link>
        <router-link to="/">
          <div class="avatar">
            <img src="../../../assets/images/avatar.png" alt="xxx头像" />
            用户xxx
          </div>
        </router-link>
        <div />
      </div>
    </div>
  </div>
</template>

<script>
import './style.scss';
export default {};
</script>
