/**
 *  Signature.js
 *  Create By rehellinen
 *  Create On 2018/9/27 19:20
 */
import {Sign} from '../service/Sign'

export class Signature {
  static getSignature () {
    return async (ctx, next) => {
      const retData = await (new Sign(ctx.query.url)).sign()
      ctx.type = 'application/json'
      ctx.body = JSON.stringify(retData)
    }
  }
}
