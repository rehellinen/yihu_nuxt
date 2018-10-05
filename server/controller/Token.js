/**
 *  UserInfo.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:19
 */
import {TokenService} from '../service/TokenService'
import cache from 'memory-cache'
import {TokenException} from "../libs/exception/TokenException"
import {SuccessMessage} from "../libs/exception/SuccessMessage"
import {controller, get} from "../libs/decorator/Router"

@controller('token')
export class Token {
  @get('')
  async getToken(ctx) {
    let token = await new TokenService(ctx.query.code).get()
    throw new SuccessMessage({
      data: token
    })
  }

  @get('check')
  async checkToken(ctx) {
    if (!cache.get(ctx.header.token)) {
      throw new TokenException()
    } else {
      throw new SuccessMessage()
    }
  }
}
