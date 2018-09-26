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
    let data =  await this.model
      .where('expires_in', '>', 1)
      .orderBy('id', 'DESC')
      .fetch()
    return data ? data.attributes : null
  }

  async saveAccessToken (data) {
    let savedData = {
      token: data.access_token,
      expires_in: data.expires_in
    }
    let res = await this.model
      .save(savedData, {method: 'insert'})

    return !!res.id
  }
}
