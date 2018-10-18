/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/25 19:23
 */
import axios from 'axios'
import config from '../../../utils/config'
import {TokenModel} from '../../model/TokenModel'
import {WechatException} from "../exception/WechatException"

const {apiUrl, WECHAT} = config
const token = new TokenModel()

export class AccessTokenService {
  constructor () {
    this.appId = WECHAT.APP_ID
    this.appSecret = WECHAT.APP_SECRET
  }

  /**
   * 主方法：获取token
   * @return {Promise<*>}
   */
  async get () {
    // 从数据库获取token
    const data = await token.getToken()
    // 判断token是否有效
    let isValid = AccessTokenService.isValid(data)
    if (isValid) {
      return data.token
    } else {
      const data = await this.update()
      token.saveToken(data)
      return data.access_token
    }
  }

  /**
   * 升级access_token
   * @return {Promise<*>}
   */
  async update () {
    const {data} = await axios.get(apiUrl.accessToken, {
      params: {
        grant_type: 'client_credential',
        appid: this.appId,
        secret: this.appSecret
      }
    })

    if (!data.access_token) {
      throw new WechatException({
        message: data.errmsg
      })
    }

    const now = new Date().getTime()
    data.expires_in = now + (data.expires_in - 200) * 1000
    return data
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
