import config from '../../utils/config.js'
import axios from 'axios'
import store from 'store'

class Token {
  constructor () {
    this.tokenUrl = config.restUrl + '/token'
  }

  // 从服务器获取Token
  async get (code) {
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
}

export {Token}
