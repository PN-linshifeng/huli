<template>
  <div class="main-wrap container card">
    <head-tag class="HeadTag" :data="[{title:'帮助中心',active:true}]">
      <el-form
        ref="form"
        class="main-right text-right"
        inline
        @submit.native.prevent="handleSearch"
      >
        <el-form-item>
          <el-input v-model="form.key" size="mini" placeholder="输入您要搜索的内容">
            <i slot="prefix" class="el-input__icon el-icon-search" />
          </el-input>
        </el-form-item>
      </el-form>
    </head-tag>
    <el-row class="query-key">
      <el-col v-for="k in queryList" :key="k.title">
        <el-button
          :type="k.id===queryKey?'danger':'default'"
          @click="handleQueryKey(k.id)"
        >{{ k.title }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HeadTag from '@/components/HeadTag/index.vue';
import './style.scss';

const queryList = [
  {
    title: '新建作品问题',
    id: 1,
  },
  {
    title: '已过审作品问题',
    id: 2,
  },
  {
    title: '作品解禁问题',
    id: 3,
  },
  {
    title: '作品资料问题',
    id: 4,
  },
  {
    title: '签约及稿费问题',
    id: 5,
  },
  {
    title: '封面问题',
    id: 6,
  },
  {
    title: '书评问题',
    id: 7,
  },
  {
    title: '作家自律公约',
    id: 8,
  },
  {
    title: '其他问题',
    id: 9,
  },
];

export default {
  components: { HeadTag },
  data() {
    return {
      queryList, // 过滤检索
      queryKey: undefined,
      form: {
        key: '',
      },
    };
  },
  methods: {
    handleSearch() {
      console.log(this.form.key);
    },
    handleQueryKey(i) {
      this.queryKey = i;
    },
  },
};
</script>
