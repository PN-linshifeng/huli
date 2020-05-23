<template>
  <div class="reword-content">
    <div class="title">
      <span>{{ rewordata.name }}</span>
    </div>
    <ul>
      <li class="reword-list">
        <div class="item-title">
          <img src="../../../assets/images/wefare_li.png" alt="" />
          <h4>奖励对象：</h4>
        </div>
        <p>{{ rewordata.object }}</p>
      </li>
      <li class="reword-list">
        <div class="item-title">
          <img src="../../../assets/images/wefare_li.png" alt="" />
          <h4>奖励要求：</h4>
        </div>
        <p>{{ rewordata.claim }}</p>
      </li>
      <li class="reword-list">
        <div class="item-title">
          <img src="../../../assets/images/wefare_li.png" alt="" />
          <h4>奖励详情：</h4>
        </div>
        <el-table :data="rewordata.content" size="small">
          <el-table-column v-for="(item, index) in rewordCaptial" :key="index" :prop="item.prop" :label="item.label" align="center" />
        </el-table>
      </li>
      <li class="reword-list">
        <div class="item-title">
          <img src="../../../assets/images/wefare_li.png" alt="" />
          <h4>重要说明：</h4>
        </div>
        <p>{{ rewordata.explan }}</p>
      </li>
      <li class="reword-list">
        <div class="item-title">
          <img src="../../../assets/images/wefare_li.png" alt="" />
          <h4>统计周期：</h4>
        </div>
        <p>{{ rewordata.time }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'RewardCon',
  props: {
    rewordata: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      captialAll: [
        { label: '等级', prop: 'level' },
        { label: '日更新', prop: 'updateWord' },
        { label: '当月千字收入（元）', prop: 'income' },
        { label: '千字奖金', prop: 'reword' }
      ],
      captialOther: [
        { label: '完本字数', prop: 'updateWord' },
        { label: '完结奖励（元）', prop: 'reword' }
      ]
    }
  },
  computed: {
    rewordCaptial: function() {
      return this.rewordata && this.rewordata.name === '全勤奖' ? this.captialAll : this.captialOther
    }
  }
}
</script>
