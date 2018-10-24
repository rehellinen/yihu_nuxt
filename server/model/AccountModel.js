/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

export class AccountModel extends BaseModel {
  constructor() {
    super()
    this.model = this.db.Model.extend({
      tableName: 'account'
    })
  }

  async saveInfo (userId, data) {
    let savedData = {
      number: data.number,
      telephone: data.telephone,
      type: data.type,
      is_push: 1
    }

    const res =  await new this.model(savedData)
      .where({id: userId}).save(null, {method: 'update'})

    if (!res) {
      throw new DatabaseException({
        message: '写入数据失败',
        status: 40001
      })
    }
  }
}
