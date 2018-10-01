/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/29 18:41
 */
import {types} from '../../utils/mime'
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'
import {SuccessMessage} from "../libs/exception/SuccessMessage"

export class User {
  static getUserInfo () {
    return async (ctx, next) => {
      const userId = TokenService.getSpecifiedValue(ctx)
      const data = await (new AccountModel()).getOneById(userId)
      throw new SuccessMessage({
        data
      })
    }
  }
}
