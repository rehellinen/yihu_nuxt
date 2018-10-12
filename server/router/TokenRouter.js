import {controller, get} from "../libs/decorator/Router"
import {Token} from "../controller/Token"

/**
 * 负责微信公众号相关
 */
@controller('token')
export class TokenRouter {
  @get('')
  async getToken (ctx) {
    await Token.getToken(ctx)
  }

  @get('check')
  async checkToken (ctx) {
    await Token.checkToken(ctx)
  }
}
