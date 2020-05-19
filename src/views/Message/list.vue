<template>
  <div class="card">
    <header class="massge-header">
      <h1>公共消息</h1>
      <div class="search">
        <el-date-picker
          v-model="searchDate"
          type="month"
          placeholder="请选择年月"
          size="small"
        />
        <el-button type="primary" size="small">查询</el-button>
      </div>
    </header>

    <div class="message-list">
      <ul>
        <li v-for="k of messageList" :key="k.id" :class="k.state?'visited':''">
          <el-row class="time">
            <span>{{ mement(k.date).format('DD') }}</span>
            <span>{{ mement(k.date).format('YYYY-MM') }}</span>
          </el-row>
          <el-row class="mian">
            <el-row>
              <el-col :xs="24" :sm="18">
                <h3> <router-link :to="'/message/'+k.id">{{ k.title }}</router-link></h3>
              </el-col>
              <el-col :xs="24" :sm="6" class="action">
                <el-link v-if="!k.state" type="info" to="/ddd" style="margin:0px 8px">标记为已读</el-link>
                <el-link type="danger">删除</el-link>
              </el-col>
            </el-row>
            <el-row
              class="content"
            >
              <router-link :to="'/message/'+k.id">{{ k.description }}</router-link>
            </el-row>
          </el-row>
        </li>
      </ul>
    </div>

    <el-row>
      <el-col :sm="24" :md="4">
        <el-link type="info">全部标记为已读</el-link>
      </el-col>
      <el-col :sm="24" :md="20" style="text-align:right">
        <el-pagination layout="prev, pager, next,jumper" :total="1000" small />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mement from 'moment'
import './style.scss';

const data = [];
for (let i = 1; i <= 10; i += 1) {
  data.push({
    date: '2020-03-0' + i,
    title: '四个关键词读懂习近平最新讲话,',
    description:
      '北京时间5月18日晚，国家主席习近平在第73届世界卫生大会视频会议开幕式上发表题为《团结合作战胜疫情 共同构建人类卫生健康共同体》的致辞。',
    state: i % 4,
    id: i,
  });
}
export default {
  data() {
    return {
      mement,
      searchDate: '',
      messageList: data,
    };
  },
};
</script>
