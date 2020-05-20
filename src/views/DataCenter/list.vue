<template>
  <div>
    <div class="card data-center">
      <head-tag :data="[{title:'稿酬统计',active:true}]" />
      <div class="select-box">
        <div class="img">
          <img src="../../assets/images/book.png" alt="xxx" />
        </div>
        <div class="right">
          <div>
            <div class="name">
              作品名称：
              <el-select v-model="queryBookValue" placeholder="请选择" size="small">
                <el-option
                  v-for="item in queryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <el-row class="liulan" :gutter="15">
              <el-col :xs="12" :sm="6" :md="6">
                <div class="item">
                  总浏览
                  <i />11515
                </div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6">
                <div class="item">
                  昨日浏览
                  <i />11515
                </div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6">
                <div class="item">
                  7日浏览
                  <i />11515
                </div>
              </el-col>
              <el-col :xs="12" :sm="6" :md="6">
                <div class="item">
                  30日浏览
                  <i />11515
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="card data-center">
      <head-tag :data="[{title:'数据明细',active:true}]">
        <el-row class="main">
          <el-col :xs="12" :sm="12">
            <el-select v-model="queryTimeArticle" placeholder="请选择" size="mini" style="width:100px">
              <el-option label="章节统计" value="1" />
              <el-option label="时间统计" value="2" />
            </el-select>
          </el-col>
          <el-col :xs="12" :sm="12" style="text-align:right">
            <el-link @click="handleSort">
              <span v-if="querySort">
                升序
                <i class="el-icon-sort-up" />
              </span>
              <span v-else>
                倒序
                <i class="el-icon-sort-down" />
              </span>
            </el-link>
          </el-col>
        </el-row>
      </head-tag>
      <div class="list">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          class="margin-bottom"
          :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
        >
          <el-table-column prop="article" label="章节名称" />
          <el-table-column prop="size" label="章节字数" />
          <el-table-column prop="date" label="发布时间" />
          <el-table-column prop="read" label="浏览次数" />
        </el-table>
        <div class="text-right">
          <el-pagination layout="prev, pager, next,jumper" :total="1000" small />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadTag from '@/components/HeadTag/index.vue';
import './style.scss';

export default {
  components: { HeadTag },
  data() {
    return {
      querySort: true,
      queryTimeArticle: '1',
      queryBookValue: '1',
      queryOptions: [
        {
          value: '1',
          label: '天王盖迪红1',
        },
        {
          value: '2',
          label: '天王盖迪红12',
        },
        {
          value: '3',
          label: '天王盖迪红3',
        },
      ],

      tableData: [
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
        {
          date: '2016-05-02 18:15',
          article: '王小虎',
          size: '500字',
          read: '625次',
        },
      ],
    };
  },
  methods: {
    handleSort() {
      this.querySort = !this.querySort;
    },
  },
};
</script>
