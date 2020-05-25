<template>
  <div class="div edit-avatar-box">
    <div class="edit">
      <div class="cut">
        <vue-cropper
          ref="cropper"
          :img="option.img"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="true"
          :full="option.full"
          :fixed="fixed"
          :fixed-number="fixedNumber"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :fixed-box="option.fixedBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          :high="option.high"
          :max-img-size="option.max"
          @real-time="realTime"
        />
      </div>
      <div class="edit-control">
        <i class="el-icon-remove-outline" @click="changeScale(-1)" />
        <div class="slider-box">
          <el-slider v-model="slider" :show-tooltip="false" />
        </div>
        <i class="el-icon-circle-plus-outline" @click="changeScale(1)" />
      </div>
      <div>
        <input
          id="uploads"
          type="file"
          style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/jpg"
          @change="uploadImg($event, 1)"
        />
        <label class="el-button el-button--primary" for="uploads">上传图片</label>(仅支持jpg，jpeg，png格式图片，大小不超过3M)
      </div>
    </div>
    <div class="edit-right">
      <div class="avatar-list">
        <div class="item">
          <h3>头像预览</h3>
          <div class="avatara">
            <div class="show-preview" :style="previewStyle1">
              <div :style="previews.div">
                <img :src="previews.url" :style="previews.img" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <h3>历史头像</h3>
          <div>
            <el-avatar v-for="(k,i) of historyAvatar" :key="k+i" :size="70" :src="k" />
          </div>
        </div>
      </div>
      <div class="button-box">
        <el-button :loading="uploadImageLoading" type="primary" @click="handleUpImage">确定</el-button>
        <el-button type="default" @click="close">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { VueCropper } from 'vue-cropper';
import './upload.scss';

export default {
  components: {
    VueCropper,
  },
  props: {
    // 当前使用的头像
    url: {
      type: String,
      required: true,
    },
    // 历史使用头像
    historyAvatar: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
    // 提交按钮状态
    uploadImageLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function() {
    return {
      circleUrl: this.url,

      slider: 50, // 滑块值
      sliderIndex: 50, // 滑块上一次的值
      previews: {}, // 预览图片样式
      previewStyle1: {}, // 预览图片样式
      // 以下是插件自身的配置参数
      option: {
        img: this.url,
        size: 1,
        full: false,
        outputType: 'png',
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 380,
        autoCropHeight: 380,
        centerBox: false,
        high: true,
        max: 99999,
      },
      show: true,
      fixed: true,
      fixedNumber: [1, 1],
      // end
    };
  },
  watch: {
    slider: function() {
      this.changeScale((this.slider - this.sliderIndex) / 2);
      this.sliderIndex = this.slider;
    },
  },
  mounted: function() {
    // console.log(window['vue-cropper'])
  },
  methods: {
    changeImg() {
      this.option.img = this.lists[~~(Math.random() * this.lists.length)].img;
    },

    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },

    handleUpImage(type) {
      // 输出图片文件
      // eslint-disable-next-line no-unused-vars
      let file;
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob(data => {
          file = window.URL.createObjectURL(data);
          // 上传事件写在这里
          this.$emit('uploadImage', data);
        });
      } else {
        this.$refs.cropper.getCropData(data => {
          file = data;
          // 上传事件写在这里
          this.$emit('uploadImage', data);
        });
      }
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
      const w = 70 / data.w;
      this.previewStyle1 = {
        width: data.w + 'px',
        height: data.h + 'px',
        overflow: 'hidden',
        margin: '0',
        transform: 'scale(' + w + ')',
      };
    },

    // 选择文件事件
    uploadImg(e, num) {
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是jpeg,jpg,png,中的一种');
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    // 取消按钮
    close() {
      console.log(87);
      this.$emit('close');
    },
  },
};
</script>
