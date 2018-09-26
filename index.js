/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/24 16:26
 */
// babel
require('@babel/register')({
  'presets': [
    '@babel/preset-env'
  ]
})
require('@babel/polyfill')

// 框架启动文件
require('./server/index')
// require('./server/service/AccessToken')
