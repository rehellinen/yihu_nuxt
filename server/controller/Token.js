/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */
import {Token as TokenLibs} from '../libs/token/Token'
import cache from 'memory-cache'
import {TokenException} from "../libs/exception/TokenException"
import {SuccessMessage} from "../libs/exception/SuccessMessage"
import {BuyerToken} from "../libs/token/BuyerToken"

export class Token {
  static async getToken(ctx) {
    let token = await new TokenLibs(ctx.query.code).get()
    throw new SuccessMessage({
      data: token
    })
  }

  static async getBuyerToken(ctx) {
    const token = await (new BuyerToken()).get(ctx.query.code)
    throw new SuccessMessage({
      data: token
    })
  }

  static async checkToken(ctx) {
    if (!cache.get(ctx.header.token)) {
      throw new TokenException()
    } else {
      throw new SuccessMessage()
    }
  }
}
