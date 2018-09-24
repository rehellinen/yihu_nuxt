const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

let config = require('../nuxt.config.js')

class Server {
  constructor () {
    this.app = new Koa()
    config.dev = !(this.app.env === 'production')
  }

  useMiddleWare (app) {

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
