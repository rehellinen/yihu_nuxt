/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */
import {TokenService} from "../service/TokenService"

export class Token {
  static getToken () {
    return async (ctx, next) => {
      console.log(ctx.query)
      ctx.body = await new TokenService().get()
    }
  }
}
