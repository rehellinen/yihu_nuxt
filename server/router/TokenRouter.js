import {controller, get} from "../libs/decorator/router"
import {Token} from "../controller/Token"

/**
 * Token令牌相关
 */
@controller('token')
export class TokenRouter {
  @get('buyer')
  async getBuyerToken (ctx) {
    await Token.getBuyerToken(ctx)
  }

  @get('check')
  async checkToken (ctx) {
    await Token.checkToken(ctx)
  }
}
