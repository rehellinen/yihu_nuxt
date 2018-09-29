/**
 *  router.js
 *  Create By rehellinen
 *  Create On 2018/9/24 15:51
 */
import Router from 'koa-router'
import {PassiveReply} from '../controller/PassiveReply'
import {Signature} from '../controller/Signature'
import {Token} from '../controller/Token'
import {User} from "../controller/User"

export const route = (app) => {
  const router = new Router()
  // 微信相关
  router.all('/wechat', PassiveReply.wechat())
  router.get('/signature', Signature.getSignature())
  router.get('/MP_verify_bTR3G8h36rV3qShu.txt', PassiveReply.file())
  // Token相关
  router.get('/token', Token.getToken())
  router.get('/token/check', Token.checkToken())
  // 用户相关
  router.get('/user', User.getUserInfo())

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
