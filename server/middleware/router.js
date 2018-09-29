/**
 *  router.js
 *  Create By rehellinen
 *  Create On 2018/9/24 15:51
 */
import Router from 'koa-router'
import {PassiveReply} from '../controller/PassiveReply'
import {Signature} from '../controller/Signature'
import {Token} from '../controller/Token'

export const route = (app) => {
  const router = new Router()
  // 微信被动回复路由
  router.all('/wechat', PassiveReply.wechat())
  router.get('/signature', Signature.getSignature())
  router.get('/MP_verify_bTR3G8h36rV3qShu.txt', PassiveReply.file())
  router.get('/token', Token.getToken())
  router.get('/token/check', Token.checkToken())

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
