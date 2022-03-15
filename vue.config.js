const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
          `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app)
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
    if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/Lalele/' : '/'
}
