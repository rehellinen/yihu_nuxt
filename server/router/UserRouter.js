import {controller, get} from "../libs/decorator/Router"
import {User} from "../controller/User"

/**
 * 负责微信公众号相关
 */
@controller('user')
export class UserRouter {
  @get('')
  async getUserInfo (ctx) {
    await User.getUserInfo(ctx)
  }
}
