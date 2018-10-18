/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */
import {Token as BaseToken} from '../libs/token/Token'
import {SuccessMessage} from "../libs/exception/SuccessMessage"
import {BuyerToken} from "../libs/token/BuyerToken"

export class Token {
  static async getBuyerToken(ctx) {
    const token = await (new BuyerToken()).get(ctx.query.code)
    throw new SuccessMessage({
      data: token
    })
  }

  static async checkToken(ctx) {
    BaseToken.checkToken(ctx)
    throw new SuccessMessage()
  }

  static async getToken(ctx) {
    let token = await new BaseToken(ctx.query.code).get()
    throw new SuccessMessage({
      data: token
    })
  }
}
