import {controller, get, post} from "../libs/decorator/router"
import {PassiveReply} from "../controller/PassiveReply"

/**
 * 微信公众号相关
 */
@controller('wechat')
export class PassiveRouter {
  @get('')
  async validation (ctx) {
    await PassiveReply.validation(ctx)
  }

  @post('')
  async passiveReply (ctx) {
    await PassiveReply.passiveReply(ctx)
  }

  @get('MP_verify_bTR3G8h36rV3qShu.txt')
  async file (ctx) {
    await PassiveReply.file(ctx)
  }
}
