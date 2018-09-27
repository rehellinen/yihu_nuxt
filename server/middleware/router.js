/**
 *  router.js
 *  Create By rehellinen
 *  Create On 2018/9/24 15:51
 */
import Router from 'koa-router'
import {PassiveReply} from '../controller/PassiveReply'

export const route = (app) => {
  const router = new Router()
  // 微信被动回复路由
  router.all('/wechat', PassiveReply.wechat())
  router.get('/upload', )

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
