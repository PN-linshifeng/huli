<template>
  <div>
    <div class="container-full header">
      <div class="container">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/images/logo.png" alt="狐狸小说" width="40" />
            <span>狐狸小说</span>
          </router-link>
          <i>重置密码</i>
        </div>
        <div class="right">
          <router-link to="/login">
            <el-button type="primary" size="small">登陆</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-full">
      <div class="container reset-password-main">
        <div class="box">
          <Step
            :data="[{title:'手机验证'},{title:'验证码验证'},{title:'输入新密码'},{title:'完成修改'}]"
            :active="active"
          />

          <el-form ref="form" :data="form" label-width="100px" class="step-items">
            <div v-if="active===0" class="item">
              <el-form-item label="手机号码：">
                <el-input v-model="form.tel" placeholder="请输入手机号码" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="confirmTel">确认</el-button>
              </el-form-item>
            </div>
            <div v-else-if="active===1" class="item">
              <el-form-item label="手机号码：">
                <el-input v-model="form.tel" placeholder="请输入手机号码" disabled />
              </el-form-item>
              <el-form-item label="验证码：">
                <el-button type="info" class="button">获取验证码</el-button>
                <el-input v-model="form.code" class="code" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="confirmCode">立即认证</el-button>
              </el-form-item>
            </div>
            <div v-else-if="active===2" class="item">
              <el-form-item label="输入新密码：">
                <el-input v-model="form.password" placeholder="请输入输入新密码" show-password />
              </el-form-item>
              <el-form-item label="确认新密码：">
                <el-input v-model="form.confirmPassword" placeholder="请输入输入新密码" show-password />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="confirmPassword">下一步</el-button>
              </el-form-item>
            </div>
            <div v-else-if="active>=3" class="item success">
              <p>
                <i class="el-icon-success" />
              </p>
              <p>密码修改成功</p>
              <p>
                <router-link to="/login" type="danger">返回登陆</router-link>
              </p>
            </div>
            <el-form-item v-if="active<=1">
              <div class="info">
                <p>没有收到短信？</p>
                <p>1、网络通信异常可能导致短信丢失，请重新获取或者稍后再试；</p>
                <p>2、手机是否欠费停机，或者屏蔽系统短信；</p>
                <p>3、如果手机丢失或者停用，请选择其他方式。</p>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div
      class="reset-password-footer"
    >版权说明：按实际的拉升阶段拉倒加拉 Copyright © 2020 All Rgiht Reserved 阅文集团版权所有</div>
  </div>
</template>

<script>
import Step from '@/components/Step/Index.vue';
import './style.scss';

export default {
  components: { Step },
  data() {
    return {
      active: 0, // 切换步骤
      form: {
        tel: '',
      },
    };
  },
  methods: {
    next(index) {
      this.active = index || ++this.active;
      console.log(this.active);
    },
    confirmTel() {
      this.next();
    },
    confirmCode() {
      this.next();
    },
    confirmPassword() {
      this.next();
      this.next();
    },
  },
};
</script>
