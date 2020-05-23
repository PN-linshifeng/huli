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
        <el-button size="mini">删除</el-button>
        <el-button size="mini">修改</el-button>
        <el-button size="mini">新章节</el-button>
      </div>
    </div>
    <chapter-view />
  </div>
</template>

<script>
import ChapterView from '../components/ChapterView';
import './style.scss';

export default {
  components: {
    ChapterView
  },
  data() {
    return {
      baseMsg: {
        where: '客户端番外',
        cType: '免费章节'
      },
    }
  }
}
</script>
