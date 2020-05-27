<template>
  <div class="writing-aside">
    <div v-if="showCase === 'draft'">
      <p class="total-capters">共{{ totalNum }}个章节</p>
      <el-divider />
    </div>
    <div v-if="showCase === 'recycle'">
      <p class="total-capters">共删除{{ totalNum }}章</p>
      <el-divider />
    </div>
    <div v-if="showCase === 'published'">
      <div class="total-capters">本书共{{ totalNum }}卷，3章
        <el-button size="mini" type="primary" plain class="new-chapter-btn" @click="createNew">新建卷</el-button>
      </div>
      <el-divider />
    </div>
    <el-menu
      :unique-opened="true"
      mode="vertical"
      router
    >
      <slider-item v-for="(item, index) in menuList" :key="item.name + index" :title="item.name" :menu-data="item" :path="path" />
    </el-menu>
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
import SliderItem from './SliderItem'
import DialogBox from '@/components/Writing-dialog/DialogBox';
import './style.scss';

export default {
  components: {
    SliderItem,
    DialogBox
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      createShow: false,
      newName: '',
      totalNum: 3,
      menuList: [
        {
          name: '未命名章节',
          id: '12',
          word: 200,
          subMenuList: [
            {
              id: '1-1',
              name: '晴天白云',
              word: 154,
              medifyDate: '2020-05-08 12:00:12'
            }
          ]
        },
        {
          name: '第一章节',
          id: '2-1',
          word: 200
        }
      ]
    }
  },
  computed: {
    showCase: function() {
      if (this.path.indexOf('draft') > 0) {
        return 'draft';
      } else if (this.path.indexOf('recycle') > 0) {
        return 'recycle';
      } else if (this.path.indexOf('published') > 0) {
        return 'published';
      } else {
        return false;
      }
    }
  },
  methods: {
    createNew() {
      this.createShow = true;
    },
    cancel(params) {
      this[params] = false;
    },
    conforeCreate() {
      if (this.newName) {
        this.createShow = false;
      } else {
        this.$message.warning('请输入卷名！');
      }
    }
  }
}
</script>
