import {BaseException} from "./BaseException"

export class TokenException extends BaseException{
  constructor(config) {
    super(config)
    this.httpCode = 401
    this.status = 90000
    this.message = 'Token已过期或无效'
  }
}
