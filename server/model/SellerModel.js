/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

export class SellerModel extends BaseModel {
  constructor() {
    super()

    this.model = this.db.Model.extend({
      tableName: 'shop'
    })
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
      throw new DatabaseException()
    } else {
      return user.attributes
    }
  }
}
