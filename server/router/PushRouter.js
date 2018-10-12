import {controller, get} from "../libs/decorator/router"
import {validate} from "../libs/decorator/validate"
import {Push} from "../controller/Push"

/**
 * 负责微信公众号相关
 */
@controller('push')
export class PushRouter {
  @get('')
  @validate('User', 'push')
  async openPush (ctx) {
    await Push.openPush(ctx)
  }
}
