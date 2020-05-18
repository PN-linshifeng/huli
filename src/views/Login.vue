<template>
  <div class="fixed">
    <div class="main">
      <h1>登录</h1>
      <el-form ref="form" :model="form" :rules="rules" v-on:submit.native.prevent="submit">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input show-password v-model="form.password" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="isLoading">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      form: { userName: '', password: '' },
      isLoading: false,
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },

  methods: {
    submit() {
      this.$router.push('/');
    },
  },
};
</script>
