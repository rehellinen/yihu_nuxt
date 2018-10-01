import {BaseException} from "./BaseException"

export class WechatException extends BaseException{
  constructor(config) {
    super(config)
    this.httpCode = 500
    this.status = 50000
    this.message = '获取全局access_token失败'
  }
}
