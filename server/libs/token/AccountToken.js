/**
 *  AccountToken.js
 *  Create By rehellinen
 *  Create On 2018/10/24 10:02
 */

import {Token} from "./Token"
import config from '../../../utils/config'
import {AccountModel} from "../../model/AccountModel"
import {WechatException} from "../exception/WechatException"

export class AccountToken extends Token{
  constructor() {
    const conf = {
      appId: config.WECHAT.ACCOUNT.APP_ID,
      appSecret: config.WECHAT.ACCOUNT.APP_SECRET,
      url: config.WECHAT_API.ACCOUNT_ACCESS_TOKEN
    }
    super(conf)
  }


  async get (code) {
    // 从微信服务器拿到openId
    const data = await this.getFromWechat({
      grant_type: 'authorization_code',
      js_code: code,
      secret: this.appSecret,
      appid: this.appId
    })
    // 存入数据库并返回用户ID
    const userId = await (new AccountModel()).saveOpenId(data.openid)
    // 生成需要缓存的数据
    const cachedData = {
      id: userId,
      scope: config.SCOPE.ACCOUNT
    }
    // 生成Token以及相关数据
    return this.saveToCache(cachedData)
  }
}
