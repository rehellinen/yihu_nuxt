/**
 *  Signature.js
 *  Create By rehellinen
 *  Create On 2018/9/27 19:20
 */
import {SignService} from '../service/SignService'

export class Signature {
  static getSignature () {
    return async (ctx, next) => {
      const retData = await (new SignService(ctx.query.url)).sign()
      ctx.type = 'application/json'
      ctx.body = JSON.stringify(retData)
    }
  }
}
