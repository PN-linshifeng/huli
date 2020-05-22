<template>
  <div>
    <el-dialog :visible="true" width="800" title="头像设置">
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
            mode="cover"
            :max-img-size="option.max"
            @real-time="realTime"
            @img-load="imgLoad"
          />
        </div>
        <div class="edit-control">
          <i class="el-icon-remove-outline" @click="changeScale(-1)" />
          <div class="slider-box"><el-slider v-model="slider" :show-tooltip="false" @change="sliderChange" /></div>
          <i class="el-icon-circle-plus-outline" @click="changeScale(1)" />
        </div>
      </div>
    </el-dialog>

    <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden', 'margin': '5px'}">
      <div :style="previews.div">
        <img :src="previews.url" :style="previews.img" />
      </div>
    </div>
    <div class="test-button">
      <button class="btn" @click="changeImg">changeImg</button>
      <label class="btn" for="uploads">upload</label>
      <input
        id="uploads"
        type="file"
        style="position:absolute; clip:rect(0 0 0 0);"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />

    </div>
  </div>
</template>
<script>
import { VueCropper } from 'vue-cropper'
import './upload.scss'

export default {
  components: {
    VueCropper,
  },
  data: function() {
    return {
      slider: 50, // 滑块值
      modelSrc: '',
      crap: false,
      previews: {},
      lists: [
        {
          img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG'
        },
        {
          img: 'https://avatars2.githubusercontent.com/u/15681693?s=460&v=4'
        }
      ],
      option: {
        img: 'https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG',
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
        max: 99999
      },
      show: true,
      fixed: false,
      fixedNumber: [1, 2]
    };
  },
  mounted: function() {
    // console.log(window['vue-cropper'])
  },
  methods: {
    changeImg() {
      this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
    },
    startCrop() {
      // start
      this.crap = true
      this.$refs.cropper.startCrop()
    },
    stopCrop() {
      //  stop
      this.crap = false
      this.$refs.cropper.stopCrop()
    },
    clearCrop() {
      // clear
      this.$refs.cropper.clearCrop()
    },
    refreshCrop() {
      // clear
      this.$refs.cropper.refresh()
    },
    changeScale(num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft()
    },
    rotateRight() {
      this.$refs.cropper.rotateRight()
    },
    finish(type) {
      // 输出
      // var test = window.open('about:blank')
      // test.document.body.innerHTML = '图片生成中..'
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          console.log(data);
          var img = window.URL.createObjectURL(data)
          this.model = true
          this.modelSrc = img
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true
          this.modelSrc = data
        })
      }
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data
      console.log(data)
    },

    finish2(type) {
      this.$refs.cropper2.getCropData((data) => {
        this.model = true
        this.modelSrc = data
      })
    },
    finish3(type) {
      this.$refs.cropper3.getCropData((data) => {
        this.model = true
        this.modelSrc = data
      })
    },
    down(type) {
      // event.preventDefault()
      var aLink = document.createElement('a')
      aLink.download = 'demo'
      // 输出
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data)
          aLink.href = window.URL.createObjectURL(data)
          aLink.click()
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data
          aLink.href = data
          aLink.click()
        })
      }
    },

    uploadImg(e, num) {
      // 上传图片
      // this.option.img
      var file = e.target.files[0]
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          this.option.img = data
        } else if (num === 2) {
          this.example2.img = data
        }
      }
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file)
    },
    imgLoad(msg) {
      console.log(msg)
    },
    // 滑块事件
    sliderChange(value) {
      console.log(value - 50)
      // this.changeScale(value)
    }
  }
}

</script>
