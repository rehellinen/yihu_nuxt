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
   * @param reFetch 是否重新发送请求
   */
  async request(params, reFetch = true) {
    let url = this.baseUrl + params.url
    if (!params.method) {
      params.method = 'GET'
    }

    const res = await axios({
      url: url,
      data: params.data,
      method: params.method,
      headers: {
        'content-type': 'application/json',
        'token': new Token().getTokenFromCache()
      }
    })

    let code = res.status.toString()
    let startChar = code.charAt(0)

    // 处理成功时的情况
    if (startChar === '2') {
      return res.data
    }

    return 'error'
  }
}
