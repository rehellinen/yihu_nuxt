import {controller, get, post} from "../libs/decorator/router"
import {User} from "../controller/User"
import {validate} from "../libs/decorator/validate"
import {Push} from "../controller/Push"

/**
 * 用户相关
 */
@controller('user')
export class UserRouter {
  @get('')
  async getUserInfo (ctx) {
    await User.getUserInfo(ctx)
  }

  @post('push')
  @validate({name: 'User', scene: 'push'})
  async openPush (ctx) {
    await Push.openPush(ctx)
  }
}
