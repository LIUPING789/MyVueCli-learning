const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭eslint检查
  //开起代理服务器 （方式一）
  /*
  devServer: {
    proxy: 'http://localhost:5000'

  }*/
  //开起代理服务器 （方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',// 代理地址
        pathRewrite: {},//重写路径，用通配符如：{'^/api': ''}
        ws: true, // 用于支持websocket
        changeOrigin: true,
      }
    }
  }
})
