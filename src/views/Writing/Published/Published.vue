<template>
  <div class="writing-published">
    <el-row class="writing-area">
      <el-col :sm="5" class="writing-asider hidden-xs-only">
        <div class="total-capters">本书共{{ totalNum }}卷，3章
          <el-button size="mini" type="primary" plain class="new-chapter-btn" @click="createNew">新建卷</el-button>
        </div>
        <el-divider />
        <writing-asider :path="path" />
      </el-col>
      <el-col :sm="19" class="writing-main">
        <router-view />
      </el-col>
    </el-row>
    <dialog-box :confirm-is-show="createShow">
      <div class="create-dialog">
        <p class="title">新建分卷</p>
        <div>
          <span>卷名：</span>
          <el-input v-model="newName" size="small" placeholder="请输入卷名" />
        </div>
        <div>
          <el-button size="medium" type="text" class="cancel-btn" @click="cancel('createShow')">取消</el-button>
          <el-divider direction="vertical" />
          <el-button size="medium" type="text" @click="conforeCreate">创建</el-button>
        </div>
      </div>
    </dialog-box>
  </div>
</template>

<script>
import writingAsider from '../components/Aside';
import DialogBox from '../components/DialogBox';
import './style.scss';

export default {
  components: {
    writingAsider,
    DialogBox
  },
  data() {
    return {
      totalNum: 3,
      path: '',
      createShow: false,
      newName: '',
    }
  },
  created() {
    this.path = this.$route.path;
  },
  methods: {
    cancel(params) {
      if (params) {
        this[params] = false;
      }
    },
    createNew() {
      this.createShow = true;
    },
    conforeCreate() {
      if (!this.newName) {
        this.$message.warning('请输入卷名！');
        return;
      }
      this.$message('创建成功！');
      this.createShow = false;
      this.newName = '';
    }
  }
}
</script>
