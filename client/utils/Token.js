import config from '../../utils/config.js'
import axios from 'axios'
import store from 'store'

class Token {
  constructor () {
    this.tokenUrl = config.restUrl + '/token'
    this.verifyUrl = config.restUrl + '/token/check'
    this.key = 'token'
  }

  async verify (code) {
    let token = this.getTokenFromCache()
    // 没有token和code，直接跳转
    if (!token && !code) {
      this.redirect()
    }
    // 没有token但是有code，到服务器获取Token
    if (!token && code) {
      await this.getTokenFromServer(code)
    }
    // 有token且有code
    if (token && code) {
      let isValid = await this._verifyFromServer(token)
      if (!isValid) {
        await this.getTokenFromServer(code)
      }
    }
    // 有token但是无code
    if (token && !code) {
      let isValid = await this._verifyFromServer(token)
      if (!isValid) {
        this.redirect()
      }
    }
  }

  redirect () {
    let url = encodeURIComponent(`${config.restUrl}/`)
    window.location.href = `${config.apiUrl.code}?appid=${config.wechat.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
  }

  async _verifyFromServer (token) {
    const {data} = await axios.get(this.verifyUrl, {
      headers: {
        token
      }
    })
    return data
  }

  // 从服务器获取Token
  async getTokenFromServer (code) {
    const data = await axios.get(this.tokenUrl, {
      params: {
        code
      }
    })

    let status = data.status.toString()
    let startChar = status.charAt(0)

    // 处理成功时的情况
    if (startChar === '2') {
      store.set('token', data.data)
    }
  }

  /**
   * 获取缓存中的Token
   * @return {*}
   */
  getTokenFromCache () {
    return store.get(this.key)
  }
}

export {Token}
