/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:37
 */
import config from '../../utils/config'
import axios from 'axios'
import {AccountModel} from '../model/AccountModel'
import {getRandChars} from '../../utils/utils'
import cache from 'memory-cache'

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
    // 存入数据库并返回用户ID
    const userId = await (new AccountModel()).saveOpenId(data)
    // 生成Token以及相关数据
    return this.saveToCache(userId)
  }

  static getSpecifiedValue (ctx, key = 'userId') {
    const token = cache.get(ctx.header.token)
    const info =  JSON.parse(token)
    return info[key]
  }

  saveToCache (userId) {
    const cachedKey = getRandChars(32)
    const cachedValue = {
      userId,
      scope: config.scope.ACCOUNT
    }

    cache.put(cachedKey, JSON.stringify(cachedValue), 6000, () => {
      cache.del(cachedKey)
    })

    return cachedKey
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
      console.log(data.data)
      throw new Error('can\'t get openID from wechat' )
    }

    return data.data
  }
}
