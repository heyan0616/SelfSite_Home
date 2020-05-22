const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  // // 这是前端解决跨域的代码
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   // host: 'localhost',
  //   port: 8080,
  //   // open: true, //配置自动启动浏览器
  //   proxy: {
  //     '/api': {
  //       target: ``,//写上接口基地址
  //       changeOrigin: true,
  //       ws: true,
  //       // secure: false, //如果是http接口，需要配置此参数
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  configureWebpack:{
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, 
        minChunkSize: 100
      })
    ]
  }
}