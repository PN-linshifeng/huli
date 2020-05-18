const path = require('path');
// const apiMocker = require('webpack-api-mocker');
const apiMocker = require('mocker-api');

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before(app) {
      apiMocker(app, path.resolve('./mocker/index.js'), {});
    },
  },
};
