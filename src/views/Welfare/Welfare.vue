<template>
  <div class="author-welfare">
    <img src="../../assets/images/welfare_bg.png" alt="" class="author-img" />
    <div class="welfare-content">
      <img src="../../assets/images/welfare_r.png" alt="" class="icon-img hidden-xs-only" />
      <el-tabs v-model="activeName" class="welfare-text">
        <el-tab-pane label="福利总览" name="0">
          <reward-con v-for="(item, index) in welfareData" :key="index" :rewordata="welfareData[index]" />
        </el-tab-pane>
        <el-tab-pane v-for="(item, index) in welfareData" :key="index" :label="item.name" :name="`${index+1}`">
          <reward-con :rewordata="welfareData[index]" />
        </el-tab-pane>
      </el-tabs>
      <div class="bottom-img">
        <img src="../../assets/images/welfare_b0.png" alt="" />
        <img src="../../assets/images/welfare_b1.png" alt="" />
      </div>
    </div>
    <div class="page-footer">版权说明：按实际的拉升阶段拉倒加拉 Copyright © 2020 All Rgiht Reserved 阅文集团版权所有</div>
  </div>
</template>

<script>
import './style.scss';
import RewardCon from './components/RewardCon.vue';

export default {
  name: 'Welfare',
  components: {
    RewardCon
  },
  data() {
    return {
      activeName: '0',
      welfareData: [
        {
          name: '全勤奖',
          object: '狐狸小说网纯分红作品',
          claim: '作者无断更、灌水、抄袭等不良记录',
          content: [
            { level: 'LV1', updateWord: '不低于六千字', income: '5（含）~15元', reword: '2元' },
            { level: 'LV2', updateWord: '不低于六千字', income: '5（含）~15元', reword: '2元' },
            { level: 'LV3', updateWord: '不低于六千字', income: '5（含）~15元', reword: '2元' }
          ],
          explan: '每个月允许有一天请假不提交，南北侧u不错不辞而别成本覅v哦深刻的， 九年极爱但那我i顿内测u日本v你。',
          time: '自然月（每月1日00：00至当月最后一天24：00）。'
        },
        {
          name: '续签奖',
          object: '狐狸小说网纯分红作品',
          claim: '作者无断更、灌水、抄袭等不良记录',
          content: [
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' }
          ],
          explan: '每个月允许有一天请假不提交，南北侧u不错不辞而别成本覅v哦深刻的， 九年极爱但那我i顿内测u日本v你。',
          time: '自然月（每月1日00：00至当月最后一天24：00）。'
        },
        {
          name: '完本奖',
          object: '狐狸小说网纯分红作品',
          claim: '作者无断更、灌水、抄袭等不良记录',
          content: [
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' }
          ],
          explan: '每个月允许有一天请假不提交，南北侧u不错不辞而别成本覅v哦深刻的， 九年极爱但那我i顿内测u日本v你。',
          time: '自然月（每月1日00：00至当月最后一天24：00）。'
        },
        {
          name: '人气奖',
          object: '狐狸小说网纯分红作品',
          claim: '作者无断更、灌水、抄袭等不良记录',
          content: [
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' },
            { updateWord: '不低于六千字', reword: '2元' }
          ],
          explan: '每个月允许有一天请假不提交，南北侧u不错不辞而别成本覅v哦深刻的， 九年极爱但那我i顿内测u日本v你。',
          time: '自然月（每月1日00：00至当月最后一天24：00）。'
        }
      ]
    }
  },
}
</script>
