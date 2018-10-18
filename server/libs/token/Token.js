/**
 *  User.js
 *  Create By rehellinen
 *  Create On 2018/9/28 20:37
 */
import config from '../../../utils/config'
import axios from 'axios'
import {AccountModel} from '../../model/AccountModel'
import md5 from 'md5'
import {getRandChars} from '../../../utils/utils'
import cache from 'memory-cache'
import {WechatException} from "../exception/WechatException"
import {TokenException} from "../exception/TokenException"

export class Token {
  /**
   * 获取指定的数据
   * @param ctx
   * @param key
   * @return {*}
   */
  static getSpecifiedValue (ctx, key = 'id') {
    const token = cache.get(ctx.header.token)
    if (!token) {
      throw new TokenException()
    }
    const info =  JSON.parse(token)
    return info[key]
  }

  /**
   * 坚持Token是否过期
   * @param ctx Koa2上下文
   */
  static checkToken (ctx) {
    const token = cache.get(ctx.header.token)
    if (!token) {
      throw new TokenException()
    }
  }

  /**
   * 生成Token令牌
   */
  static generateToken () {
    const str = getRandChars(32)
    const time = new Date().getTime()
    const prefix = config.TOKEN_PREFIX

    return md5(prefix)
  }

  /**
   * 保存Token到缓存
   * @param cachedValue 需要保存的信息
   */
  saveToCache (cachedValue) {
    const cachedKey = Token.generateToken()

    cache.put(cachedKey, JSON.stringify(cachedValue), config.TOKEN_EXPIRES_IN, () => {
      cache.del(cachedKey)
    })

    return cachedKey
  }

  /**
   * 从微信API获取数据
   * @param extParams 额外参数
   * @return {Promise<void>}
   */
  async getFromWechat (extParams) {
    const params = Object.assign({
      appid: this.appId,
      secret: this.appSecret,
    }, extParams)

    const {data} = await axios.get(this.url, { params })

    if (!data.openid) {
      throw new WechatException({
        message: data.errmsg
      })
    }

    return data
  }
}
