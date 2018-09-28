/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */

export class Token {
  static getToken () {
    return async (ctx, next) => {
      // TODO：token令牌获取全过程
      ctx.body = '123'
    }
  }
}
