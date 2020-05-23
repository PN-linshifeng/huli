<template>
  <div class="my-works">
    <!-- head -->
    <head-tag :data="headData">
      <el-button class="creat-new" siz="small" type="text" @click="createNew">新建作品 +</el-button>
    </head-tag>
    <!-- list -->
    <div v-if="workList.length">
      <div v-for="(item, index) in workList" :key="index">
        <el-row>
          <el-col :sm="12">
            <img :src="item.pic" class="work-pic" />
            <div class="work-desc">
              <h4>{{ item.name }} <el-tag size="small" effect="plain" type="info">{{ item.status }}</el-tag></h4>
              <p class="work-word">{{ item.words }}字</p>
              <p>最新章节：{{ item.lastChapter }}</p>
              <p>更新时间：{{ item.midfyDate }}</p>
            </div>
          </el-col>
          <el-col :sm="12">
            <div class="work-tag">
              <el-tag v-for="(a, i) in item.labels" :key="i" size="small" :type="a.type" effect="plain">{{ a.label }}</el-tag>
            </div>
            <div class="work-opera">
              <el-button size="small">申请解禁</el-button>
              <el-button size="small" type="primary" @click="goToWrite(item.name)">去写作</el-button>
              <el-button size="small">已发布</el-button>
              <el-button size="small" @click="editWork(item.id)">修改作品</el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider />
      </div>
    </div>
    <div v-else class="noworks-area">
      <img src="../../assets/images/nowork.png" alt="未有作品" />
      <p class="nowork-tips">你还未有作品哦，赶快<el-button size="small" type="text">新建作品</el-button>吧！</p>
    </div>
  </div>
</template>

<script>
import HeadTag from '@/components/HeadTag/index.vue';
import './style.scss';

export default {
  name: 'MyWorks',
  components: {
    HeadTag
  },
  data() {
    return {
      headData: [{ title: '我的作品', active: true }],
      workList: [
        {
          name: '天王盖地虎-12345',
          id: 0,
          pic: require('../../assets/images/book.png'),
          words: '33500',
          midfyDate: '2020-05-20 20:08:01',
          lastChapter: '小鸡炖蘑菇',
          status: '审核中',
          labels: [
            { label: '科幻', type: 'success' },
            { label: '科幻', type: 'info' }
          ]
        },
        {
          name: '天王盖地虎-88888',
          id: 1,
          pic: require('../../assets/images/book.png'),
          words: '33500',
          midfyDate: '2020-05-20 20:08:01',
          lastChapter: '小鸡炖蘑菇',
          status: '审核中',
          labels: [
            { label: '科幻', type: 'danger' },
            { label: '科幻', type: 'info' }
          ]
        }
      ]
    }
  },
  methods: {
    goToWrite(val) {
      if (val) {
        this.$router.push(`/writing/${val}`)
      }
    },
    editWork(id) {
      this.$router.push(`/myworks/setting${id}`);
    },
    createNew() {
      this.$router.push('/myworks/create');
    }
  }
}
</script>
