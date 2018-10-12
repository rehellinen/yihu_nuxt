import {BaseException} from "./BaseException"

export class DatabaseException extends BaseException{
  constructor(config) {
    super(config)
    this.httpCode = 404
    this.status = 40000
    this.message = '获取数据失败'
  }
}
