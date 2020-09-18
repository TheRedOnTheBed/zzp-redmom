/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-04-14 01:51:07
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 17:15:43
 */
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },

  devServer: {
    open: false,
    port: 8888,
  },

  assetsDir: 'static',
  // lintOnSave: false
}
