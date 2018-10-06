/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/29 18:41
 */
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'
import {SuccessMessage} from "../libs/exception/SuccessMessage"
import {controller, get} from "../libs/decorator/Router"

@controller('user')
export class User {
  @get('')
  async getUserInfo (ctx) {
    const userId = TokenService.getSpecifiedValue(ctx)
    const data = await (new AccountModel()).getOneById(userId)
    throw new SuccessMessage({
      data
    })
  }
}
