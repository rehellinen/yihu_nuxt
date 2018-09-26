/**
 *  router.js
 *  Create By rehellinen
 *  Create On 2018/9/24 15:51
 */
import Router from 'koa-router'
import reply from '../service/Reply'
import wechatMiddleware from './wechat'

export const route = (app) => {
  const router = new Router()
  router.all('/wechat', wechatMiddleware({}, reply))

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
