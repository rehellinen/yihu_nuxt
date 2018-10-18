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
    super('account')
  }

  async saveOpenId (data) {
    let userId
    const savedData = {
      open_id: data.openid,
      status: config.STATUS.NORMAL
    }

    const user = await this.model
      .where(savedData)
      .fetch()

    if (!user) {
      let res = await new this.model(savedData)
        .save(null, {method: 'insert'})
      if (!res) {
        throw new DatabaseException({
          message: '写入数据失败',
          status: 40001
        })
      }
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
