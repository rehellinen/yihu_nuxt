/**
 *  BuyerToken.js
 *  Create By rehellinen
 *  Create On 2018/10/18 14:53
 */
import {Token} from "./Token"
import {AccountModel} from "../../model/AccountModel"
import config from '../../../utils/config'

export class BuyerToken extends Token{
  constructor() {
    super()
    this.appId = config.WECHAT.BUYER_MP.APP_ID
    this.appSecret = config.WECHAT.BUYER_MP.APP_SECRET
    this.url = config.WECHAT_API.MP_CODE
  }


  async get () {
    // 从微信服务器拿到openId
    // ?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code
    const data = await this.getFromWechat({

    })
    // 存入数据库并返回用户ID
    const userId = await (new AccountModel()).saveOpenId(data)
    // 生成需要缓存的数据
    const cachedData = {
      id: userId,
      scope: config.SCOPE.BUYER
    }
    // 生成Token以及相关数据
    return this.saveToCache(cachedData)
  }
}
