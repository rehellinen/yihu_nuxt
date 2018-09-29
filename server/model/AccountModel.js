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
    console.log(user)

    if (!user.attributes.id) {
      let res = await new this.model(savedData)
        .save(null, {method: 'insert'})
      userId = user.id
    } else {
      userId = user.attributes.id
    }

    return userId
  }
}
