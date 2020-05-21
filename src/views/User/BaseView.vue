<template>
  <div class="main-height card user-page">
    <head-tag
      :data="[{title:'基本资料',path:'/user/info',active:true},{title:'详细资料',path:'/user/detailed'},{title:'修改密码',path:'/user/password'},{title:'修改银行卡',path:'/user/bankcard'}]"
    />

    <router-view />
  </div>
</template>
<script>
import HeadTag from '@/components/HeadTag/index.vue';
import './style.scss';

export default {
  components: { HeadTag },
  data() {
    return {
      searchForm: {
        date: '1',
        value: undefined,
      },
      querySort: true,
    };
  },
  methods: {
    handleSort() {
      this.querySort = !this.querySort;
    },
  },
};
</script>
