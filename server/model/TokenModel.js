/**
 *  TokenModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 23:12
 */
import {BaseModel} from './BaseModel'

export class TokenModel extends BaseModel{
  constructor () {
    super('token')
  }

  /**
   * 获取数据库中最新的access_token
   * @return {Promise<any>}
   */
  async getAccessToken () {
    let data =  await this.model
      .where({'type': 'access_token'})
      .orderBy('id', 'DESC')
      .fetch()
    return data ? data.attributes : null
  }

  /**
   * 保存access_token到数据库
   * @param data
   * @return {Promise<boolean>}
   */
  async saveAccessToken (data) {
    let savedData = {
      token: data.access_token,
      expires_in: data.expires_in,
      type: 'access_token'
    }
    let res = await this.model
      .save(savedData, {method: 'insert'})

    return !!res.id
  }
}
