/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-14 01:51:07
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-25 11:27:37
 */
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },

  devServer: {
    open: false,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://101.200.232.216:3000',
        changeOrigin: true
      }
    }
  },

  assetsDir: 'static'
  // lintOnSave: false
}
