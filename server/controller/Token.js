/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */
import {TokenService} from '../service/TokenService'
import cache from 'memory-cache'

export class Token {
  static getToken () {
    return async (ctx, next) => {
      ctx.body = await new TokenService(ctx.query.code).get()
    }
  }

  static checkToken () {
    return async (ctx, next) => {
      cache.get(ctx.header.token) ? ctx.body = true: ctx.body = false
    }
  }
}
