<template>
  <div class="creat-second">
    <el-form :model="workMsg" label-position="right" label-width="90px">
      <el-form-item label="首发站点">
        <el-radio-group v-model="workMsg.a1">
          <el-radio :label="1">狐狸小说</el-radio>
          <el-radio :label="0">他站首发</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作品名称">
        <el-input v-model="workMsg.a2" size="small" placeholder="15个字内，请勿添加书名号与特殊符号" />
        <i v-if="isNameOk" class="el-icon-success name-success-icon" />
      </el-form-item>
      <el-form-item label="作品类型">
        <el-row>
          <el-col :span="11">
            <el-select v-model="workMsg.a3" size="small" placeholder="请选择大分类">
              <el-option
                v-for="item in options.b1"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
          </el-col>
          <el-col :span="13">
            <el-select v-model="workMsg.a4" size="small" placeholder="请选择小分类">
              <el-option
                v-for="item in options.b2"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              />
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="作品标签">
        <div>
          <el-tag v-for="(item, index) in workMsg.a4" :key="index" effect="dark" closable @close="handleClose(item)">{{ item }}</el-tag>
          <el-button size="small" @click="showInput">添加</el-button>
        </div>
      </el-form-item>
      <el-form-item label="授权类型">
        <el-radio-group v-model="workMsg.a5">
          <el-radio :label="1">独家首发</el-radio>
          <el-radio :label="0">驻站作品</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作品封面">
        <el-upload
          class="upload-demo"
          action="/"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            <p>1.只能上传规格为240*320像素与小于100k的JPG图片</p>
            <p>2.禁止上传任何有黄色、暴力、血腥、恐怖、广告宣传的封面，一经发现即做禁书处理</p>
            <p>1.作品封面由用户个人制作并上传，基于此产生的法律责任本站不承担连带责任</p>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="作品介绍">
        <el-input v-model="workMsg.a6" size="small" type="textarea" rows="5" maxlength="500" show-word-limit />
        <span>20-500个字</span>
      </el-form-item>
      <el-form-item label="作品大纲">
        <el-input v-model="workMsg.a7" size="small" type="textarea" rows="5" maxlength="500" show-word-limit />
        <span>10-500个字</span>
      </el-form-item>
      <el-form-item label="扉页寄语">
        <el-input v-model="workMsg.a8" size="small" type="textarea" rows="5" maxlength="30" show-word-limit />
        <span>10-30个字</span>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="isTagSelectShow" :append-to-body="true" class="tags-dialog">
      <h4>我的作品 <span class="little-tip">每类限选1个标签，最多四个标签</span></h4>
      <el-divider />
      <div>
        <div v-for="(item, index) in tagSelectArr" :key="index">
          <p class="tag-type">{{ item.name }}</p>
          <el-radio-group v-model="selectTags[index+1]" type="primary" size="small">
            <el-radio-button v-for="(a, i) in item.content" :key="i" :label="a" />
          </el-radio-group>
          <el-divider />
        </div>
      </div>
      <div class="last-result">
        <span class="selected-tags">已选：</span>
        <el-tag v-for="(item, index) in insureTags" :key="index" effect="dark" closable @close="handleClose(item)">{{ item }}</el-tag>
        <el-button size="small" type="primary" @click="insureTagsSelect">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'SecondStep',
  data() {
    return {
      isTagSelectShow: false,
      isNameOk: false,
      workMsg: {
        a1: 1,
        a5: 1
      },
      options: {
        b1: [],
        b2: [],
      },
      selectTags: {
        1: '',
        2: '',
        3: '',
        4: ''
      },
      insureTags: [], // 选择了的标签
      tagSelectArr: [
        {
          name: '风格',
          content: ['淡定', '热血', '机智']
        },
        {
          name: '主角身份',
          content: ['淡定', '阳光', '机智']
        }
      ]
    };
  },
  watch: {
    selectTags: {
      deep: true,
      handler: function(val) {
        const tags = [];
        Object.values(val).forEach((item) => {
          if (item) {
            tags.push(item);
          }
        });
        this.insureTags = tags;
      }
    }
  },
  methods: {
    showInput() {
      this.isTagSelectShow = true;
    },
    handleClose(val) {
      const index = this.insureTags.indexOf(val);
      const a = Object.values(this.selectTags).indexOf(val); // 对选项进行清除
      this.insureTags.splice(index, 1);
      this.$set(this.selectTags, `${a + 1}`, '');
    },
    insureTagsSelect() {
      if (this.insureTags.length) {
        this.$set(this.workMsg, 'a4', this.insureTags);
        this.isTagSelectShow = false;
      } else {
        this.$message.warning('请选择作品标签！');
      }
    }
  }
};
</script>
