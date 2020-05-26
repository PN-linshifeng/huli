<template>
  <div class="aside-menu">
    <el-menu mode="vertical" router :default-active="this.$route.path">
      <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path">
        <span v-if="item.icon" :class="`iconfont ${item.icon}`" />
        <img v-else :src="item.picIcon" />
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import './style.scss';
export default {
  data() {
    return {
      menuList: [
        { icon: 'hulizu2516', name: '工作台', path: '/index' },
        { icon: 'hulizu2517', name: '作品管理', path: '/myworks' },
        { icon: 'hulizu2518', name: '数据中心', path: '/datacenter' },
        { icon: 'hulizu2519', name: '收入统计', path: '/incomes' },
        { icon: 'hulizu2520', name: '积分兑换', path: '/redeem' },
        { icon: 'hulizu2521', name: '帮助中心', path: '/help' },
      ],
    };
  },
};
</script>
