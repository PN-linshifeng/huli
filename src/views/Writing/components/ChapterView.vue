<template>
  <div class="chapter-view">
    <p class="write-tip"><i class="el-icon-warning-outline" />tips:不能出现涉黄、涉政、涉爆、危害社会稳定、违反法律法规等有害信息的内容。</p>
    <div class="chapter-content">
      <div class="chapter-title">
        <h4>{{ viewData.title }}</h4>
        <div class="little-msg"><span>标题<span class="red-text">{{ viewData.title.length }}</span>/20</span>&nbsp;
          <span>正文<span class="red-text">{{ viewData.word }}</span>字</span>
        </div>
      </div>
      <el-divider />
      {{ viewData.content }}
      {{ tip.bookname }}
    </div>
  </div>
</template>

<script>
import './style.scss';

export default {
  data() {
    return {
      viewData: {
        title: '未命名标题',
        word: 0,
        content: '表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。'
      },
      tip: ''
    }
  },
  created() {
    this.tip = this.$route.params;
  }
}
</script>
