/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/25 19:23
 */
import axios from 'axios'
import config from '../../utils/config'
import {TokenModel} from '../model/TokenModel'
import {AccessTokenService} from "./AccessTokenService"

const {apiUrl, wechat, tokenType} = config
const token = new TokenModel()

export class TicketService {
  constructor () {

  }

  /**
   * 主方法：获取token
   * @return {Promise<*>}
   */
  async get () {
    // 获取access_token
    this.accessToken = await new AccessTokenService().get()

    // 从数据库获取token
    const data = await token.getToken(tokenType.TICKET)

    // 判断token是否有效
    let isValid = TicketService.isValid(data)
    if (isValid) {
      return data.token
    } else {
      const data = await this.update()
      await token.saveToken(data, tokenType.TICKET)
      return data.ticket
    }
  }

  /**
   * 升级access_token
   * @return {Promise<*>}
   */
  async update () {
    const data = await axios.get(apiUrl.ticket, {
      params: {
        type: 'jsapi',
        access_token: this.accessToken
      }
    })

    const now = new Date().getTime()
    data.data.expires_in = now + (data.data.expires_in - 200) * 1000
    return data.data
  }

  /**
   * 判断token是否有效
   * @param data
   * @return {boolean}
   */
  static isValid (data) {
    if (!data || !data.token || !data.expires_in) {
      return false
    }

    const expiresIn = data.expires_in
    const now = new Date().getTime()

    return now < expiresIn
  }
}
