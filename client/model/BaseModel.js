/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2018/9/28 22:13
 */
import config from '../../utils/config'
import axios from 'axios'
import {Token} from '../utils/Token'

export class BaseModel {
  constructor() {
    this.baseUrl = config.restUrl
  }

  /**
   * 对微信的 http 请求进行封装
   * @param params 请求参数配置
   *  params参数:
   *  1. url [api地址]
   *  2. method [http请求方式]
   *  3. data [请求时携带的参数]
   * @param requestTimes 发送请求的次数
   */
  async request(params, requestTimes = 0) {
    let url = this.baseUrl + params.url
    if (!params.method) {
      params.method = 'GET'
    }

    try {
      const res = await axios({
        url: url,
        data: params.data,
        method: params.method,
        headers: {
          'content-type': 'application/json',
          'token': new Token().getTokenFromCache()
        },
        validateStatus (status) {
          return status < 500
        }
      })

      let code = res.status.toString()

      if (code.charAt(0) === '2') {
        return res.data
      }

      if (code === '401') {
        if (requestTimes > 5) {
          (new Token()).verify()
        }
        if (requestTimes > 6) {
          (new Token()).verify()
        }
        requestTimes++
        return await this.reFetch(params, requestTimes)
      }
    } catch (e) {
      console.log(e)
    }
  }

  reFetch (params, requestTimes) {
    return new Promise(async resolve => {
      setTimeout(async () => {
        const data = await this.request(params, requestTimes)
        resolve(data)
      }, 1000)
    })
  }
}
