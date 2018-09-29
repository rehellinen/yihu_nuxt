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
    if (!token) {
      await this.getTokenFromServer(code)
    } else {
      await this._verifyFromServer(token, code)
    }
  }

  async _verifyFromServer (token, code) {
    const {data} = await axios.get(this.verifyUrl, {
      headers: {
        token
      }
    })

    if (!data) {
      this.getTokenFromServer(code)
    }
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
