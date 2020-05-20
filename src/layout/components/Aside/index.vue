<template>
  <div class="aside-menu">
    <el-menu mode="vertical" router>
      <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.path" :default-active="$route.path">
        <i v-if="item.icon" :class="item.icon" />
        <img v-else :src="item.picIcon" />
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
  <!-- <ul class="left-aside">
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_18.png" alt="工作台" />
        </span>
        工作台
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_21.png" alt="作品管理" />
        </span>
        作品管理
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_23.png" alt="数据中心" />
        </span>
        数据中心
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_25.png" alt="积分兑换" />
        </span>
        统计收入
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_27.png" alt="积分兑换" />
        </span>
        积分兑换
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <span>
          <img src="../../../assets/images/huli_29.png" alt="帮助中心" />
        </span>
        帮助中心
      </router-link>
    </li>
  </ul> -->
</template>

<script>
import './style.scss';
export default {
  data() {
    return {
      menuList: [
        { icon: null, picIcon: require('../../../assets/images/huli_18.png'), name: '工作台', path: '/index' },
        { icon: null, picIcon: require('../../../assets/images/huli_21.png'), name: '作品管理', path: '/myworks' },
        { icon: null, picIcon: require('../../../assets/images/huli_23.png'), name: '数据中心', path: '/datacenter' }, // 下面四个还没有，所以点了会报错，但是不写样式就错啦
        { icon: null, picIcon: require('../../../assets/images/huli_25.png'), name: '收入统计', path: '/incomes' },
        { icon: null, picIcon: require('../../../assets/images/huli_27.png'), name: '积分兑换', path: '/redeem' },
        { icon: null, picIcon: require('../../../assets/images/huli_29.png'), name: '帮助中心', path: '/helpcenter' }
      ]
    }
  }
};
</script>
