require('@babel/register')({
  'presets': [
    '@babel/preset-env'
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ]
})
require('@babel/polyfill')

@controller('api')
class Test {
  @get('/')
  testFunc () {
    console.log('testFunc')
  }
}

const controller = (path) => {
  return (target) => {
    target['routePrefix'] = path
  }
}

const get = (path) => {
  return baseMethod({
    method: 'get',
    path
  })
}

const baseMethod = (conf) => {
  return (target, key) => {
    console.log(target, key)
    conf.path = normalizePath(conf.path)
    conf.target = target
    routerMap.set(conf, target[key])
  }
}

console.log(Test.routePrefix)
