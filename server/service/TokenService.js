/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:37
 */
import config from '../../utils/config'
import axios from 'axios'

export class TokenService {
  constructor (code) {
    this.url = config.apiUrl.userAccessToken
    this.appId = config.wechat.appId
    this.appSecret = config.wechat.appSecret
    this.code = code
  }

  async get () {
    // 从微信服务器拿到openId
    const data = await this.getFromWechat()
    console.log(data)
    // 存入数据库并返回用户ID
    this.saveToDb(data)
  }

  async getFromWechat () {
    const data = await axios.get(this.url, {
      params: {
        appid: this.appId,
        secret: this.appSecret,
        code: this.code,
        grant_type: 'authorization_code'
      }
    })

    if (!data.data.openid) {
      throw new Error('can\'t get openID from wechat' )
    }

    return data.data
  }

  saveToDb (data) {

  }
}
