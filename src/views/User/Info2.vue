<template>
  <div>
    <el-form ref="infoForm" :data="info" label-width="100px" class="infoForm">
      <el-form-item label="您的头像：">
        <div class="img">
          <img :src="info.avatar||defaultAvatar" class="avatar" />
          <el-button v-if="isEdit" @click="handleSwitchUpload">上传新头像</el-button>
        </div>
      </el-form-item>
      <el-form-item label="作者笔名：">
        <span v-if="!isEdit">{{ info.nickname }}</span>
        <el-input v-else v-model="infoForm.nickname" />
      </el-form-item>
      <el-form-item label="作家ID：">{{ info.id }}</el-form-item>
      <el-form-item label="作者身份：">{{ info.roles }}</el-form-item>
      <el-form-item label="作者性别：">
        <span v-if="!isEdit">{{ info.sex }}</span>
        <span v-else>
          <el-radio v-model="infoForm.sex" label="男">男</el-radio>
          <el-radio v-model="infoForm.sex" label="女">女</el-radio>
          <el-radio v-model="infoForm.sex" label="保密">保密</el-radio>
        </span>
      </el-form-item>
      <el-form-item label="真实姓名：">
        <span v-if="!isEdit">{{ info.name }}</span>
        <el-input v-else v-model="infoForm.name" />
      </el-form-item>
      <el-form-item label="身份证号：">
        <span v-if="!isEdit">{{ info.idNunber }}</span>
        <el-input v-else v-model="infoForm.idNunber" />
      </el-form-item>
      <el-form-item label="常住地址：">
        <div v-if="!isEdit">
          <span v-for="(value,key) in info.address" :key="key" class="padding">{{ value }}</span>
        </div>
        <el-cascader
          v-else
          ref="address"
          v-model="infoForm.address"
          :options="cityList"
          :props="{ expandTrigger: 'hover' }"
          @change="handleAddressChange"
        />
      </el-form-item>
      <el-form-item label="详细地址：">
        <span v-if="!isEdit">{{ info.addressInfo }}</span>
        <el-input v-else v-model="infoForm.addressInfo" />
      </el-form-item>
      <el-form-item label="手机号码：">
        <div v-if="!isEdit">
          <span class="padding">{{ info.telRegion }}</span>
          <span>{{ info.tel }}</span>
        </div>
        <div v-else class="tel-box">
          <el-select v-model="telRegion" class="telRegion">
            <el-option value="+86" label="中国大陆 +86" />
          </el-select>
          <el-input v-model="infoForm.tel" placeholder class="tel" />
          <el-link type="info">获取验证码</el-link>
          <el-input v-model="infoForm.code" placeholder class="code" />
        </div>
      </el-form-item>
      <el-form-item label="电子邮件：">
        <span v-if="!isEdit">{{ info.email }}</span>
        <el-input v-else v-model="infoForm.email" />
      </el-form-item>
      <el-form-item label="QQ：">
        <span v-if="!isEdit">{{ info.qq }}</span>
        <el-input v-else v-model="infoForm.qq" />
      </el-form-item>
      <el-form-item>
        <el-button v-if="!isEdit" type="primary" @click="handleEdit()">修改</el-button>
        <div v-else>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button type="default" @click="handleEdit(false)">取消</el-button>
        </div>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="successVisible" width="250px" class="dialog-success">
      <div>
        <i class="el-icon-circle-check" />
      </div>
      <div class="txt">资料修改成功</div>
      <div>
        <el-button type="primary" size="small" @click="successVisible = false">确 认</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="errorVisible" width="250px" class="dialog-error">
      <div>
        <i class="el-icon-warning-outline" />
      </div>
      <div class="txt">资料修改失败，请稍后再试！</div>
      <div>
        <el-button type="primary" size="small" @click="errorVisible = false">确 认</el-button>
      </div>
    </el-dialog>
    <el-button @click="handleSwitchUpload">上传新头像</el-button>
    <el-dialog :visible.sync="dialogUploadVisible" title="头像设置" custom-class="dialog-upload">
      <uploadAvatar
        :url="info.avatar||defaultAvatar"
        :upload-image-loading="uploadImageLoading"
        :history-avatar="historyAvatar"
        @close="handleSwitchUpload"
        @uploadImage="uploadImage"
      />
    </el-dialog>
  </div>
</template>
<script>
import uploadAvatar from './Components/uploads';
import defaultAvatar from '@/assets/images/default-avatar.jpg';

const cityList = [
  {
    value: 'gd',
    label: '广东省',
    children: [
      {
        value: 'sz',
        label: '深圳市',
        children: [
          {
            value: 'ba',
            label: '宝安区',
          },
          {
            value: 'ns',
            label: '南山区',
          },
        ],
      },
      {
        value: 'gz',
        label: '广州市',
        children: [
          {
            value: 'by',
            label: '白云区',
          },
          {
            value: 'yx',
            label: '越秀区',
          },
        ],
      },
    ],
  },
  {
    value: 'hn',
    label: '湖南省1',
    children: [
      {
        value: 'cs',
        label: '长沙',
        children: [
          {
            value: 'fr',
            label: '芙蓉区',
          },
          {
            value: 'tx',
            label: '天心区',
          },
        ],
      },
      {
        value: 'hy',
        label: '衡阳',
        children: [
          {
            value: 'hyA',
            label: '衡阳A',
          },
          {
            value: 'hyB',
            label: '衡阳B',
          },
        ],
      },
    ],
  },
];
export default {
  components: { uploadAvatar },
  data() {
    return {
      // 控制组件显示
      cropperShow: true,
      // 上传地址
      uploadUrl: '/kukacms/visitor/picUpload.htm?type=2',
      // 上传文件名
      fieldName: 'files',
      // 预览圆形图片 false为显示
      noCircle: true,
      // 预览方形图片 false为显示
      noSquare: false,
      // 裁剪图片宽高(即所需要图片的宽高)
      width: 300,
      height: 150,
      maxSize: 10240,

      // 大小限制
      //
      cityList, // 假城市数据
      isEdit: false, // 编辑状态
      telRegion: '+86', // 电话区号
      infoForm: {}, // form 表单
      defaultAvatar, // 默认头像
      // 历史头像
      historyAvatar: [
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374416169,262924133&fm=111&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374416169,262924133&fm=111&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3374416169,262924133&fm=111&gp=0.jpg',
      ],
      // 假数据信息
      info: {
        avatar: '',
        name: '精炼石',
        nickname: '林珊珊',
        id: '114564561',
        idNunber: '2654651199001012642',
        roles: '普通作家',
        sex: '男',
        address: { gd: '广东省', sz: '深圳市', ns: '宝安区' },
        addressInfo: '宝安大厦A栋3116号',
        qq: '15145845',
        tel: '1379966554',
        email: '1515646@aa.com',
        telRegion: '+86',
      },
      successVisible: false, // 成功窗口
      errorVisible: false, // 失败窗口
      dialogUploadVisible: false, // 上传图片对话框
      uploadImageLoading: false, // 提交上传图片状态

      // 图片截取后调用，用于获取图片
      getPicFunc(data) {
        console.log(data);
      },
      // 图片上传成功后执行函数
      successFunc(data) {
        console.log(data);
      },
    };
  },
  methods: {
    handleAddressChange(value) {
      console.log(this.infoForm.address);
      console.log(value, this.$refs.address.getCheckedNodes()[0].pathLabels);
    },
    handleEdit(fal) {
      this.isEdit = !this.isEdit;

      if (!fal) {
        const address = this.info.address && Object.keys(this.info.address);

        this.infoForm = { ...this.info, address };
      }
    },
    // 提交资料
    handleSubmit() {
      this.isEdit = !this.isEdit;
      this.successVisible = true;
    },
    // 上传图片对话框切换
    handleSwitchUpload() {
      const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
      const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
      if (isIE) {
        this.$confirm('请升级浏览到IE11版本以上，或者使用谷歌浏览器', {
          showCancelButton: false,
          confirmButtonText: '关闭',
        });
      } else {
        this.dialogUploadVisible = !this.dialogUploadVisible;
      }
    },
    // 上传图片方法
    uploadImage(data) {
      console.log('fileName:', data);
      this.uploadImageLoading = true;
      new Promise(resolve => {
        setTimeout(() => {
          resolve('ok');
        }, 2000);
      }).then(() => {
        this.handleSwitchUpload();
        this.info.avatar = data;
        this.uploadImageLoading = false;
      });
    },
  },
};
</script>
