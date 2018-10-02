require('@babel/register')({
  'presets': [
    '@babel/preset-env'
  ]
})
require('@babel/polyfill')
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const {resolve} = require('path')
const R = require('ramda')
const r = (path) => {
  return resolve(__dirname, path)
}

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const middlewares = ['exception', 'validation', 'router']

let config = require('../nuxt.config.js')

class Server {
  constructor () {
    this.app = new Koa()
    this.useMiddleWares()(middlewares)
  }

  useMiddleWares () {
    return R.map(R.compose(
      R.map(i => i(this.app)),
      require,
      i => `${r('./middleware')}/${i}`
    ))
  }

  async start () {
    const nuxt = new Nuxt(config)
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    this.app.use(ctx => {
      ctx.status = 200
      return new Promise((resolve, reject) => {
        ctx.res.on('close', resolve)
        ctx.res.on('finish', resolve)
        nuxt.render(ctx.req, ctx.res, promise => {
          promise.then(resolve).catch(reject)
        })
      })
    })

    this.app.listen(port, host)
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  }
}

const server = new Server()
server.start()
