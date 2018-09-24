/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/24 16:26
 */
require('@babel/register')({
  'presets': [
    '@babel/preset-env'
  ]
})

require('@babel/polyfill')
require('./server/index')
