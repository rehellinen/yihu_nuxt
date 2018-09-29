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
import {TokenService} from "../service/TokenService"
import {AccountModel} from "../model/AccountModel"

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
  router.get('/test', async (ctx, next) => {
    // const userId = TokenService.getSpecifiedValue(ctx)
    const data = await (new AccountModel()).getOneById(3)
    console.log(data)
  })

  app
    .use(router.routes())
    .use(router.allowedMethods())
}
