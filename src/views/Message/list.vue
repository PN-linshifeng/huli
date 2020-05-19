<template>
  <div class="card">
    <header class="massge-header">
      <h1>公共消息</h1>
      <div class="search">
        <el-button type="primary" size="small">查询</el-button>
      </div>
    </header>
    <div class="message-list">
      <ul>
        <li class="visited">
          <el-row class="time">
            <span>23</span>
            <span>2020-03</span>
          </el-row>
          <el-row class="mian">
            <el-row>
              <el-col :xs="24" :sm="18">
                <h3>发送到发送到手动阀奥德赛发给</h3>
              </el-col>
              <el-col :xs="24" :sm="6" class="action">
                <el-link type="success" to="/ddd" style="margin:0px 8px">标记为已读</el-link>
                <el-link type="danger">删除</el-link>
              </el-col>
            </el-row>
            <el-row
              class="content"
            >发送到发送到手动阀奥德赛发给发送到发送到手动阀奥德赛发给发送到发送到手动阀奥德赛发给发送到发送到手动阀奥德赛发给发送到发送到手动阀奥德赛发给</el-row>
          </el-row>
        </li>
      </ul>
    </div>
    <el-row>
      <el-col :sm="24" :md="4">全部标为已读</el-col>
      <el-col :sm="24" :md="20" style="text-align:right">
        <el-pagination layout="prev, pager, next,jumper" :total="1000" small />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import './style.scss';
export default {};
</script>
