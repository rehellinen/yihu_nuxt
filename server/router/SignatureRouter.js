import {controller, get} from "../libs/decorator/Router"
import {Signature} from "../controller/Signature"

/**
 * 负责微信公众号相关
 */
@controller('signature')
export class SignatureRouter {
  @get('')
  async getSignature (ctx) {
    await Signature.getSignature(ctx)
  }
}
