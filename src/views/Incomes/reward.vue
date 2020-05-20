<template>
  <div class="incomes-page">
    <div class="card">
      <head-tag :data="[{title:'稿酬统计',path:'/incomes'},{title:'奖励统计',path:'/reward',active:true}]" />
      <div class="search-box">
        <el-form ref="search" :data="searchForm" inline>
          <el-form-item label="查看方式：" />
          <el-form-item>
            <el-select v-model="searchForm.date">
              <el-option label="按时间" value="1" />
              <el-option label="按收入" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="searchForm.value" type="month" placeholder="请选择年月" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查看</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="line margin-bottom" />
      <div class="profit-box">
        <div class="hd margin-bottom">2020年03月度奖励</div>
        <div class="list">
          <div class="item">
            <div class="blue">
              <span class="iconfont hulizu2718" />
              <span class="rmb">
                960.00
                <i>元</i>
              </span>
              <span class="total">已结算</span>
            </div>
          </div>
          <div class="item">
            <div class="green">
              <span class="iconfont hulizu2718" />
              <span class="rmb">
                960.00
                <i>元</i>
              </span>
              <span class="total">存余</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card data-center">
      <head-tag :data="[{title:'收入明细',active:true}]">
        <el-row class="main">
          <el-col :xs="24" :sm="24" style="text-align:right">
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
          :data="[]"
          border
          style="width: 100%"
          class="margin-bottom"
          :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
        >
          <el-table-column prop="date" label="时间" />

          <el-table-column prop="prop1" label="作品" />
          <el-table-column prop="prop1" label="全勤奖" />
          <el-table-column prop="prop1" label="阶段奖" />
          <el-table-column prop="prop1" label="月度奖" />

          <el-table-column prop="prop1" label="合计" />
          <div slot="empty" class="no-data">
            <img src="../../assets/images/nodata.png" alt="没有数据" />
            <p>暂无明细</p>
          </div>
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
