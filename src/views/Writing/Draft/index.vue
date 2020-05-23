<template>
  <div>
    <div class="opera-area">
      <div class="type-select">
        <div class="select-one">
          发布至
          <el-select v-model="baseMsg.where" filterable placeholder="请选择" size="mini">
            <el-option
              v-for="item in options.where"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </div>
        <div class="select-one">
          章节类型
          <el-select v-model="baseMsg.cType" filterable placeholder="请选择" size="mini">
            <el-option
              v-for="item in options.capterType"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            />
          </el-select>
        </div>
      </div>
      <div class="opera-button">
        <el-button size="mini">删除</el-button>
        <el-button size="mini">保存</el-button>
        <el-button size="mini" type="info">新建</el-button>
        <el-button size="mini" type="primary">发布</el-button>
      </div>
    </div>
    <chapter-view />
  </div>
</template>

<script>
import ChapterView from '../components/ChapterView';
import './style.scss';

export default {
  components: {
    ChapterView
  },
  data() {
    return {
      baseMsg: {
        where: '1',
        cType: '11'
      },
      options: {
        where: [
          { code: '1', name: '客户端番外' }
        ],
        capterType: [
          { code: '11', name: '免费章节' }
        ]
      },
    }
  }
}
</script>
