/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/9/25 19:23
 */
import axios from '@nuxtjs/axios'
import config from '../../utils/config'

// 微信api
const baseUrl = `https://api.weixin.qq.com`
const wechat = config.wechat
const apiUrl = {
    accessToken: `${baseUrl}/cgi-bin/token`
}

export class AccessToken {
  constructor () {
    this.appId = config.appId
    this.appSecret = config.appSecret
  }

  async fetchAccessToken () {
    const data = await this.getAccessToken()

    if (this.isValidAccessToken(data)) {
      return await this.updateAccessToken()
    }

    await this.saveAccessToken()
    return data
  }

  async updateAccessToken () {
    const data = await axios.get(apiUrl.accessToken, {
      params: {
        grant_type: 'client_credential',
        appid: wechat.appId,
        secret: wechat.appSecret
      }
    })
    const now = new Date().getTime()
    data.expires_in = now + (data.expires_in - 200) * 1000
    return data
  }

  isValidAccessToken (data) {
    if (!data || !data.access_token || !data.expire_in) {
      return false
    }

    const expiresIn = data.expire_in
    const now = new Date().getTime()

    return now < expiresIn
  }
}
