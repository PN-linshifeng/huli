<template>
  <div class="writing-aside">
    <el-menu
      :unique-opened="true"
      mode="vertical"
      router
    >
      <slider-item v-for="(item, index) in menuList" :key="item.name + index" :title="item.name" :menu-data="item" :path="path" />
    </el-menu>
  </div>
</template>

<script>
import SliderItem from './SliderItem'
import './style.scss';

export default {
  components: {
    SliderItem
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
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
  }
}
</script>
