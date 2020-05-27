<template>
  <div class="writing-main">
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
        <el-button size="mini" type="primary" @click="publishWrite">发布</el-button>
      </div>
    </div>
    <chapter-view />
    <dialog-box :confirm-is-show="confirmPubish">
      <div class="update-dialog">
        <p class="title">发布章节</p>
        <div class="new-chapter-info">
          <p><span>章节名：</span>{{ newChapter.name }}</p>
          <p><span>字数：</span>{{ newChapter.word }}字</p>
          <p><span>类型：</span>{{ newChapter.type }}</p>
          <p><span>发布卷：</span>{{ newChapter.chapterType }}</p>
        </div>
        <div>
          <el-checkbox v-model="newChapter.isTime">定时发布：</el-checkbox>
          <el-date-picker
            v-model="newChapter.updateTime"
            type="datetime"
            size="small"
            default-time="12:00:00"
          />
          <p class="update-tips"><i class="el-icon-warning-outline" />设置较晚的时间定时发布生效，否则将直接发布</p>
        </div>
        <div>
          <el-button size="medium" type="text" class="cancel-btn" @click="cancel('confirmPubish')">取消</el-button>
          <el-divider direction="vertical" />
          <el-button size="medium" type="text" @click="conformCreate">发布</el-button>
        </div>
      </div>
    </dialog-box>
  </div>
</template>

<script>
import DialogBox from '@/components/Writing-dialog/DialogBox';
import ChapterView from '../components/ChapterView';
import './style.scss';

export default {
  components: {
    ChapterView,
    DialogBox
  },
  data() {
    return {
      confirmPubish: false,
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
      newChapter: {
        name: '青天白云',
        word: '220',
        type: '免费章节',
        chapterType: '正文',
        isTime: true,
        updateTime: '2020-05-25 18:00:00'
      }
    }
  },
  methods: {
    publishWrite() {
      this.confirmPubish = true;
    },
    cancel(params) {
      this[params] = false;
    },
    conformCreate() {

    }
  }
}
</script>
