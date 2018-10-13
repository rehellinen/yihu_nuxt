import {controller, get} from "../libs/decorator/router"
import {Signature} from "../controller/Signature"

/**
 * 签名相关
 */
@controller('signature')
export class SignatureRouter {
  @get('')
  async getSignature (ctx) {
    await Signature.getSignature(ctx)
  }
}
