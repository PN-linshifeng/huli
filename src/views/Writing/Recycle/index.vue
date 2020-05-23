<template>
  <div class="published-index">
    <div class="opera-area">
      <div class="type-select">
        <div class="select-one">
          章节类型：公共章节
        </div>
      </div>
      <div class="opera-button">
        <el-button size="mini">彻底删除</el-button>
        <el-button size="mini">恢复到草稿</el-button>
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
  }
}
</script>
