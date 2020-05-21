<template class="">
  <div class="work-bench">
    <el-row :gutter="20">
      <el-col :sm="11" class="author-info">
        <el-tabs v-model="activeName">
          <el-tab-pane label="个人资料" name="first">
            个人资料
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :sm="13" class="hidden-xs-only">
        <Calendar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './style.scss';
import Calendar from './components/Calendar.vue';

export default {
  name: 'Home',
  components: {
    Calendar
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

 <style lang="scss">
.home {
  padding: 20px;
}
</style>
