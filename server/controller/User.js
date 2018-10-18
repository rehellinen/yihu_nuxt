/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/29 18:41
 */
import {AccountModel} from '../model/AccountModel'
import {Token} from '../libs/token/Token'
import {SuccessMessage} from "../libs/exception/SuccessMessage"

export class User {
  static async getUserInfo (ctx) {
    const userId = Token.getSpecifiedValue(ctx)
    const data = await (new AccountModel()).getOneById(userId)
    throw new SuccessMessage({
      data
    })
  }
}
