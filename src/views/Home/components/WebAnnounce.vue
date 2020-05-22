<template>
  <div class="web-announce">
    <head-tag :data="headData">
      <router-link :to="'/message'" class="more-btn">更多 >></router-link>
    </head-tag>
    <el-row :gutter="20">
      <el-col v-for="(item, index) in webData" :key="index" :sm="8" class="announce-item">
        <img :src="item.pic" alt="" />
        <div v-for="a in item.lists" :key="a.id">
          <i class="red-point" />
          <router-link :to="`/message/${a.id}`">{{ a.title }}</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeadTag from '@/components/HeadTag/index.vue';

export default {
  name: 'WebAnnounce',
  components: {
    HeadTag
  },
  data() {
    return {
      headData: [{ title: '网站公告', active: true }],
      webData: [
        {
          pic: require('../../../assets/images/web_0.png'),
          lists: [
            { id: 3, title: '快来这里养成你的日更习惯吧！' },
            { id: 4, title: '快来这里养成你的日更习惯吧33333333333！' },
            { id: 5, title: '快来这里养成你的日更习惯吧333323453333333！' }
          ]
        },
        {
          pic: require('../../../assets/images/web_1.png'),
          lists: [
            { id: 6, title: '快来这里养成你的日更习惯吧！' },
            { id: 7, title: '快来这里养成你的日更习惯吧33333333333！' },
            { id: 8, title: '快来这里养成你的日更习惯吧33333333333！' }
          ]
        },
        {
          pic: require('../../../assets/images/web_2.png'),
          lists: [
            { id: 12, title: '快来这里养成你的日更习惯吧！' },
            { id: 40, title: '快来这里养成你的日更习惯吧33333333333！' },
            { id: 43, title: '快来这里养成你的日更习惯吧33333333333！' }
          ]
        }
      ]
    };
  },
};
</script>
