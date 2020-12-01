const path = require('path')

module.exports = {
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: 7080,
    proxy: {
      '/api': {
        target: 'https://mcm.meflourish.com',
        changeOrigin: true,
        secure: false
        // pathRewrite: {
        //     '^/api': ''
        // }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, './src/assets/style/common.less')
      ]
    }
  }
}
