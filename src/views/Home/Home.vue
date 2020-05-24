<template class="">
  <div class="work-bench">
    <el-row :gutter="20">
      <el-col :sm="9">
        <div class="author-info">
          <head-tag :data="headData">
            <el-button size="small" type="text" class="modify-info">修改资料</el-button>
          </head-tag>
          <div class="author-base">
            <el-image :src="authorMsg.pic" fit="cover" class="author-pic" />
            <div>
              <h4>{{ authorMsg.name }}<span class="icon iconfont author-grade">&#xe61d; LV{{ authorMsg.grade }}</span></h4>
              <div class="author-books-msg">
                <span class="mg-r">作品：<span class="color-text">{{ authorMsg.books }}</span>本</span>
                <span>已上架：<span class="color-text">{{ authorMsg.putBooks }}</span>本</span>
              </div>
            </div>
          </div>
          <div class="create-msg">
            <div class="msg-box"><h4>{{ authorMsg.writingDays }}</h4><p>创作天数</p></div>
            <div class="msg-box"><h4>{{ authorMsg.allWords }}</h4><p>累计字数</p></div>
            <div class="msg-box"><h4>{{ authorMsg.fens }}</h4><p>作品粉丝</p></div>
          </div>
          <el-divider />
          <div class="create-msg">
            <div class="msg-box"><h4>{{ authorMsg.feeTotal }}</h4><p>总稿费</p></div>
            <div class="msg-box"><h4>{{ authorMsg.feeSettle }}</h4><p>已结算</p></div>
            <div class="msg-box"><h4>{{ authorMsg.feeBalan }}</h4><p>余额</p></div>
          </div>
        </div>
      </el-col>
      <el-col :sm="15" class="writing-cal hidden-xs-only">
        <Calendar />
      </el-col>
    </el-row>
    <my-works />
    <web-announce />
  </div>
</template>

<script>
import './style.scss';
import HeadTag from '@/components/HeadTag/index.vue';
import Calendar from './components/Calendar.vue';
import MyWorks from './../WorkManage/MyWorks.vue';
import WebAnnounce from './components/WebAnnounce.vue';

export default {
  name: 'Home',
  components: {
    HeadTag,
    Calendar,
    MyWorks,
    WebAnnounce
  },
  data() {
    return {
      headData: [{ title: '个人资料', active: true }],
      authorMsg: {
        name: '天蚕土豆',
        pic: require('../../assets/images/avatar.png'),
        grade: '1',
        books: '2',
        putBooks: '1',
        writingDays: '10',
        allWords: '10000',
        fens: '10',
        feeTotal: '1',
        feeSettle: '1',
        feeBalan: '2'
      }
    }
  }
}
</script>

 <style lang="scss">
.home {
  padding: 20px;
}
</style>
