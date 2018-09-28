/**
 *  TokenModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 23:12
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'

let {tokenType} = config

export class TokenModel extends BaseModel{
  constructor () {
    super('token')
  }

  /**
   * 获取数据库中最新的access_token
   * @param type access_token / ticket
   */
  async getToken (type = tokenType.ACCESS_TOKEN) {
    try{
      let data =  await this.model
        .where({type})
        .orderBy('id', 'DESC')
        .fetch()
      return data ? data.attributes : null
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * 保存access_token到数据库
   * @param data
   * @param type access_token / ticket
   * @return {Promise<boolean>}
   */
  async saveToken (data, type = tokenType.ACCESS_TOKEN) {
    try {
      let savedData = {
        token: data.access_token || data.ticket,
        expires_in: data.expires_in,
        type: type
      }

      let res = await new this.model(savedData)
        .save(null, {method: 'insert'})

      return !!res.id
    } catch (e) {
      console.log(e)
    }
  }
}
