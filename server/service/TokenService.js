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
import {WechatException} from "../libs/exception/WechatException"
import {TokenException} from "../libs/exception/TokenException"

export class TokenService {
  constructor (code) {
    this.url = config.apiUrl.userAccessToken
    this.appId = config.WECHAT.APP_ID
    this.appSecret = config.WECHAT.APP_SECRET
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
    if (!token) {
      throw new TokenException()
    }
    const info =  JSON.parse(token)
    return info[key]
  }

  static checkToken (ctx) {
    const token = cache.get(ctx.header.token)
    if (!token) {
      throw new TokenException()
    }
  }

  saveToCache (userId) {
    const cachedKey = getRandChars(32)
    const cachedValue = {
      userId,
      scope: config.SCOPE.ACCOUNT
    }
    cache.put(cachedKey, JSON.stringify(cachedValue), config.TOKEN_EXPIRES_IN, () => {
      cache.del(cachedKey)
    })
    return cachedKey
  }

  async getFromWechat () {
    const {data} = await axios.get(this.url, {
      params: {
        appid: this.appId,
        secret: this.appSecret,
        code: this.code,
        grant_type: 'authorization_code'
      }
    })

    if (!data.openid) {
      throw new WechatException({
        message: data.errmsg
      })
    }

    return data
  }
}
