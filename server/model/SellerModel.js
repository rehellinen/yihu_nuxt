/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'

export class SellerModel extends BaseModel {
  constructor() {
    super('seller')
  }

  async getSellerByInfo (data) {
    const condition = {
      number: data.number,
      telephone: data.telephone,
      status: config.status.NORMAL
    }

    const user = await this.model
      .where(condition)
      .fetch()

    if (!user) {
      return null
    } else {
      return user.attributes
    }
  }
}
