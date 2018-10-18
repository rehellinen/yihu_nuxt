/**
 *  TokenModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 23:12
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

let {TOKEN_TYPE} = config

export class TokenModel extends BaseModel{
  constructor () {
    super('token')
  }

  /**
   * 获取数据库中最新的access_token
   * @param type access_token / ticket
   */
  async getToken (type = TOKEN_TYPE.ACCESS_TOKEN) {
    let data =  await this.model
      .where({type})
      .orderBy('id', 'DESC')
      .fetch()
    if (!data) {
      throw new DatabaseException()
    }

    return data.attributes
  }

  /**
   * 保存access_token到数据库
   * @param data
   * @param type access_token / ticket
   * @return {Promise<boolean>}
   */
  async saveToken (data, type = TOKEN_TYPE.ACCESS_TOKEN) {
    let savedData = {
      token: data.access_token || data.ticket,
      expires_in: data.expires_in,
      type: type
    }

    let res = await new this.model(savedData)
      .save(null, {method: 'insert'})
    if (!res) {
      throw new DatabaseException({
        status: 40001,
        message: '插入Token数据失败'
      })
    }
  }
}
