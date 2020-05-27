<template>
  <div class="published-index">
    <div class="opera-area">
      <div class="type-select">
        <div class="select-one">
          发布至：{{ baseMsg.where }}
        </div>
        <div class="select-one">
          章节类型：{{ baseMsg.cType }}
        </div>
      </div>
      <div class="opera-button">
        <el-button size="mini" @click="deleteData">删除</el-button>
        <el-button size="mini">修改</el-button>
        <el-button size="mini">新章节</el-button>
      </div>
    </div>
    <chapter-view />
    <dialog-box :confirm-is-show="deleteConfirmShow">
      <div class="delete-dialog">
        <i class="el-icon-warning-outline" />
        <p>确认要删除分卷：某某某吗？</p>
        <div>
          <el-button size="medium" type="text" class="cancel-btn" @click="cancel('deleteConfirmShow')">我再想想</el-button>
          <el-divider direction="vertical" />
          <el-button size="medium" type="text">确定删除</el-button>
        </div>
      </div>
    </dialog-box>
  </div>
</template>

<script>
import ChapterView from '../components/ChapterView';
import DialogBox from '@/components/Writing-dialog/DialogBox';
import './style.scss';

export default {
  components: {
    ChapterView,
    DialogBox
  },
  data() {
    return {
      deleteConfirmShow: false,
      baseMsg: {
        where: '客户端番外',
        cType: '免费章节'
      },
    }
  },
  methods: {
    deleteData() {
      this.deleteConfirmShow = true;
    },
    cancel(params) {
      if (params) {
        this[params] = false;
      }
    }
  }
}
</script>
