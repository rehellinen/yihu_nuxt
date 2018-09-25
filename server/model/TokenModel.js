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

  async getAccessToken () {
    const data =  await this.model
      .where('expires_in', '>', 1)
      .orderBy('id', 'DESC')
      .fetch()
    return data.attributes
  }
}
