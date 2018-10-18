import config from '../../utils/config.js'
import axios from 'axios'
import store from 'store'

class Token {
  constructor () {
    this.tokenUrl = config.REST_URL + '/token'
    this.verifyUrl = config.REST_URL + '/token/check'
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
      return await this.getTokenFromServer(code)
    }
    // 有token且有code
    if (token && code) {
      let isValid = await this._verifyFromServer(token)
      if (!isValid) {
        return await this.getTokenFromServer(code)
      }
    }
    // 有token但是无code
    if (token && !code) {
      let isValid = await this._verifyFromServer(token)
      if (!isValid) {
        this.redirect()
      }
    }

    return token
  }

  redirect () {
    let url = encodeURIComponent(`${config.REST_URL}/`)
    window.location.href = `${config.apiUrl.code}?appid=${config.WECHAT.APP_ID}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
  }

  async _verifyFromServer (token) {
    const {data, status} = await axios.get(this.verifyUrl, {
      headers: {
        token
      },
      validateStatus (status) {
        return status < 500
      }
    })

    return status !== 401;
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
      store.set('token', data.data.data)
    }

    return data.data.data
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
