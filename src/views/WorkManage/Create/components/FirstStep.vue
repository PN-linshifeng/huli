<template>
  <div class="creat-first">
    <el-row :gutter="50" class="pics">
      <el-col :span="12">
        <img src="../../../../assets/images/create_0.png" alt="" />
      </el-col>
      <el-col :span="12">
        <img src="../../../../assets/images/create_1.png" alt="" />
      </el-col>
    </el-row>
    <el-form
      label-position="right"
      label-width="90px"
    >
      <el-form-item label="目标人群">
        <el-row :gutter="50">
          <el-col :span="10">
            <el-radio v-model="a" label="0">男生</el-radio>
            <p>一大堆男生向描述一大堆男生向描述一大堆男生向描述一大堆男生向描述一大堆男生向描述一大堆男生向描述</p>
          </el-col>
          <el-col :span="10">
            <el-radio v-model="a" label="1">女生</el-radio>
            <p>一大堆女生向描述一大堆女生向描述一大堆女生向描述一大堆女生向描述一大堆女生向描述一大堆女生向描述</p>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'FirstStep',
  data() {
    return {
      a: '0'
    }
  }
}
</script>
