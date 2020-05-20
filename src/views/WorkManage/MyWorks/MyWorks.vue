<template>
  <div class="my-works">
    <!-- head -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="我的作品" name="first">
        <!-- list -->
        <div v-if="workList.length">
          <!-- 样式还未处理 -->
          <el-row v-for="(item, index) in workList" :key="index">
            <el-col :sm="12">
              <img :src="item.pic" />
              <div>
                <h5>{{ item.name }}<el-tag size="small" effect="plain" type="info">{{ item.status }}</el-tag></h5>
                <p>{{ item.words }}字</p>
                <p>最新章节：{{ item.lastChapter }}</p>
                <p>更新时间：{{ item.midfyDate }}</p>
              </div>
            </el-col>
            <el-col :sm="12">
              <div>
                <el-tag v-for="(a, i) in item.labels" :key="i" size="small" :type="a.type" effect="plain">{{ a.label }}</el-tag>
              </div>
              <div>
                <el-button size="small">申请解禁</el-button>
                <el-button size="small" type="primary">去写作</el-button>
                <el-button size="small">已发布</el-button>
                <el-button size="small">修改作品</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <!-- <img src="../../../assets/images/nowork.png" alt="未有作品" /> -->
          <p class="nowork-tips">你还未有作品哦，赶快<el-button size="small" type="text">新建作品</el-button>吧！</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'MyWorks',
  data() {
    return {
      activeName: 'first',
      workList: [
        // {
        //   name: '天王盖地虎-12345',
        //   pic: '',
        //   words: '33500',
        //   midfyDate: '2020-05-20 20:08:01',
        //   lastChapter: '小鸡炖蘑菇',
        //   status: '审核中',
        //   labels: [
        //     { label: '科幻', type: 'success' }
        //   ]
        // }
      ]
    }
  }
}
</script>
