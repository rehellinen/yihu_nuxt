import {BaseException} from "./BaseException"

export class SuccessMessage extends BaseException{
  constructor(config) {
    super(config)
    this.httpCode = 200
    this.status = 1
    this.message = '获取数据成功'
  }
}
