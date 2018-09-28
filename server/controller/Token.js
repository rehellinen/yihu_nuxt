/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */

export class Token {
  static getToken () {
    return async (ctx, next) => {
      ctx.body = '123'
    }
  }
}
