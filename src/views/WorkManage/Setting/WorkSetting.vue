<template>
  <div class="work-setting">
    <p class="page-title">
      <span>作品管理 > </span>
      <span class="current-page">作品设置</span>
    </p>
    <el-row :gutter="20" class="work-info">
      <el-col :sm="6" class="work-pic">
        <div class="work-pic"><img :src="workMsg.pic" alt="" /></div>
        <el-button size="small">上传新封面</el-button>
      </el-col>
      <el-col :sm="18" class="edit-msg">
        <el-form
          :model="workMsg"
          label-position="right"
          label-width="80px"
        >
          <el-form-item label="作品名称：">
            <div v-if="!isEdit">
              <span v-if="!isEdit">{{ workMsg.name }}</span>
              <el-button size="mini" type="primary" class="add-btn">新建章节</el-button>
            </div>
            <el-input v-else v-model="workMsg.name" size="small" />
          </el-form-item>
          <el-form-item label="作品书号：">
            <span>{{ workMsg.number }}</span>
          </el-form-item>
          <el-form-item label="首发站点：">
            <span v-if="!isEdit">{{ workMsg.a1 === 1 ? '狐狸小说' : '他站首发' }}</span>
            <el-radio-group v-else v-model="workMsg.a1">
              <el-radio :label="1">狐狸小说</el-radio>
              <el-radio :label="0">他站首发</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="授权类型：">
            <span v-if="!isEdit">{{ workMsg.a2 === 1 ? '独家首发' : '驻站作品' }}</span>
            <el-radio-group v-else v-model="workMsg.a2">
              <el-radio :label="1">独家首发</el-radio>
              <el-radio :label="0">驻站作品</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="作品类型：">
            <span>{{ workMsg.a3 }}</span>
          </el-form-item>
          <el-form-item label="作品标签：">
            <p v-if="!isEdit">
              <span v-for="(item, index) in workMsg.a4" :key="index">{{ item }}、</span>
            </p>
            <div v-else>
              <el-tag v-for="(item, index) in workMsg.a4" :key="index" effect="dark" closable @close="handleClose(item)">{{ item }}</el-tag>
            </div>
          </el-form-item>
          <el-form-item label="字数：">
            <span>{{ workMsg.word }}字</span>
          </el-form-item>
          <el-form-item label="作品状态：">
            <span v-if="!isEdit">{{ workMsg.a5 }}</span>
            <el-select v-else v-model="workMsg.a5" size="small" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="作品介绍：">
            <span v-if="!isEdit">{{ workMsg.a6 }}</span>
            <el-input v-else v-model="workMsg.a6" size="small" type="textarea" />
          </el-form-item>
          <el-form-item label="作品大纲：">
            <span v-if="!isEdit">{{ workMsg.a7 }}</span>
            <el-input v-else v-model="workMsg.a6" size="small" type="textarea" />
          </el-form-item>
          <el-form-item label="扉页寄语：">
            <span v-if="!isEdit">{{ workMsg.a8 }}</span>
            <el-input v-else v-model="workMsg.a7" size="small" type="textarea" />
          </el-form-item>
        </el-form>
        <el-button v-if="!isEdit" size="small" type="primary" class="edit-btn" @click="editMsg">修改设置</el-button>
        <div v-else>
          <el-button size="small" type="primary" class="edit-btn" @click="saveEdit">保存</el-button>
          <el-button size="small" class="edit-btn cancel-btn" @click="cancelEdit">取消</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'WorkSetting',
  data() {
    return {
      isEdit: false,
      workMsg: {
        name: '天王盖地虎',
        pic: require('../../../assets/images/book.png'),
        number: '111111819',
        a1: 1,
        a2: 1,
        a3: '仙侠-都市修真',
        a4: ['阳光', '教师', '技术流', '江湖'],
        word: 0,
        a5: '连载中',
        a6: '九四u额哈刚好等于如果是打撒还是购入啊合适的简单介绍，鸡舍互话我就。',
        a7: '九四u额哈刚好等于如果是打撒还是购入啊合适的简单介绍',
        a8: '九四u额哈刚好等于如果是打撒还是购入啊合适的简单介绍'
      },
      options: [
        { code: '1', name: '连载中' },
        { code: '2', name: '已完结' }
      ]
    }
  },
  methods: {
    handleClose(val) {
      const index = this.workMsg.a4.indexOf(val);
      this.workMsg.a4.splice(index, 1);
    },
    editMsg() {
      this.isEdit = true;
    },
    saveEdit() {
      console.log('调用保存接口', 127);
      this.isEdit = false;
    },
    cancelEdit() {
      this.isEdit = false;
    },
  }
}
</script>
