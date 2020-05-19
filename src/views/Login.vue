<template>
    <div class="login">
        <el-row class="login-bg">
            <el-col :md="18" :sm='10' :xs='20' class="login-layout">
                <el-row>
                    <!-- 图片 -->
                    <el-col :md='10'>
                        <img :src="require('../assets/images/login.png')" class="left-image">
                    </el-col>
                    <!-- 输入框 -->
                    <el-col :md='8' class="login-area">
                        <h3>狐狸小说作者登录</h3>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="密码登录" name="first">
                                <el-form :model='loginData' :rules='wordRules' ref='wordLogin'>
                                    <el-form-item prop='userName'>
                                        <el-input size='small' clearable v-model='loginData.userName' prefix-icon="el-icon-user-solid" placeholder="填写用户名"></el-input>
                                    </el-form-item>
                                    <el-form-item prop='passWord'>
                                        <el-input size='small' clearable v-model='loginData.passWord' prefix-icon="el-icon-lock" placeholder="密码"></el-input>
                                    </el-form-item>
                                    <el-form-item class="remberUser">
                                        <el-checkbox v-model='loginData.isRemeber'>记住用户名</el-checkbox>
                                        <span class="forget-word">忘记密码</span>
                                    </el-form-item>
                                </el-form>
                            </el-tab-pane>
                            <el-tab-pane label="短信登录" name="second">
                                <el-form :model='loginData'>
                                    <el-form-item>
                                        <el-input size='small' type='tel' clearable v-model='loginData.userName' prefix-icon="el-icon-user-solid" placeholder="填写手机号"></el-input>
                                    </el-form-item>
                                    <el-form-item class="captcha-get">
                                        <el-input size='small' clearable v-model='loginData.passWord' prefix-icon="el-icon-lock" placeholder="验证码"></el-input>
                                        <el-button size='small'>获取验证码</el-button>
                                    </el-form-item>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>
                        <el-button class="login-button" type='primary' size='small' @click='loginSubmit'>登录</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            loginData: { 
                uersName: '',
                passWord: '',
                isRemeber: true
            },
            activeName: 'first',
            wordRules: {
                userName: [
                    { required: 'true', message: '请输入用户名', trigger: 'blur' }
                ],
                passWord: [
                    { required: 'true', message: '请输入密码', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        handleClick() {

        },
        loginSubmit() {
            this.$refs.wordLogin.validate((valid) => {
                if(valid) {
                    console.log('登录');
                } else {
                    return false;
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.login{
    .login-bg{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .login-layout {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        .left-image{
            max-width: 100%;
            margin-bottom: -5rem;
        }
        .remberUser{
            margin: 0;
        }
        .login-area,
        .forget-word{
            float: right;
        }
        .login-area{
            padding: 1rem 2rem;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 .2rem 0 #ccc;
        }
        .login-button{
            width: 100%;
        }
        .captcha-get {
            .el-form-item__content {
                line-height: 1;
            }
            .el-input {
                width: 60%;
            }
            .el-button{
                float: right;
                background-color: #ccc;
            }
        }
    }
}
</style>
<style lang="scss">
.login{
    .el-form-item{
        margin-bottom: 1rem;
    }
    .captcha-get {
        .el-form-item__content {
            line-height: 1;
            }
    }
    .el-tabs__nav-wrap::after {
        content: none;
    }
    .el-button{
        padding: .5rem /* 9/16 */;
    }
}
</style>