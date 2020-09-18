/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-09-18 16:55:51
 * @LastEditors: zzp
 * @LastEditTime: 2020-09-18 16:55:52
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
