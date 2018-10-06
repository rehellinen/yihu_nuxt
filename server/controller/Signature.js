/**
 *  Signature.js
 *  Create By rehellinen
 *  Create On 2018/9/27 19:20
 */
import {SignService} from '../service/SignService'
import {SuccessMessage} from "../libs/exception/SuccessMessage"
import {controller, get} from "../libs/decorator/Router"

@controller('signature')
export class Signature {
  @get('')
  async getSignature (ctx) {
    const retData = await (new SignService(ctx.query.url)).sign()
    throw new SuccessMessage({
      data: retData
    })
  }
}
