/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'

export class AccountModel extends BaseModel {
  constructor() {
    super('account')
  }

  async saveOpenId (data) {
    let userId
    const savedData = {
      open_id: data.openid,
      status: config.status.NORMAL
    }

    const user = await this.model
      .where(savedData)
      .fetch()

    if (!user) {
      let res = await new this.model(savedData)
        .save(null, {method: 'insert'})
      userId = res.id
    } else {
      userId = user.attributes.id
    }

    return userId
  }

  async saveInfo (userId, data) {
    let savedData = {
      number: data.number,
      telephone: data.telephone,
      type: data.type,
      is_push: 1
    }

    return await new this.model(savedData)
      .where({id: userId}).save(null, {method: 'update'})
  }
}
