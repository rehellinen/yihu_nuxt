/**
 *  router.js
 *  Create By rehellinen
 *  Create On 2018/9/24 15:51
 */
import Router from 'koa-router'
import sha1 from 'sha1'
import config from '../../utils/config'

export const route = (app) => {
  const router = new Router()
  router.get('/validation', (ctx, next) => {
    const token = config.wechat.token
    const {signature, timestamp, nonce, echostr} = ctx.query

    const str = [token, timestamp, nonce].sort().join('')
    const shaRes = sha1(str)

    if (shaRes === signature) {
      ctx.body = echostr
    } else {
      ctx.body = 'fail'
    }
  })

  app.use(router.routes())
    .use(router.allowedMethods())
}
