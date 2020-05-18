<template>
  <div class="container-full header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/logo.png" alt="狐狸小说" />
        </router-link>
      </div>
      <div class="right">
        <router-link to="/">
          <img src="../../assets/images/huli_09.png" alt="作者福利" />
          作者福利
        </router-link>
        <router-link to="/">
          <img src="../../assets/images/huli_11.png" alt="消息" />
          消息
        </router-link>
        <router-link to="/">
          <div class="avatar">
            <img src="../../assets/images/avatar.png" alt="xxx头像" />
            用户xxx
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  height: 100px;
  line-height: 100px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  background: #ffffff;

  .logo {
    float: left;
    width: 180px;
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .right {
    text-align: right;
    img {
      vertical-align: middle;
    }
    a {
      margin: 0px 15px;
    }
  }
  .avatar {
    display: inline-block;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
}
</style>