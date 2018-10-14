/**
 *  BannerModel.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:43
 */
import {BaseModel} from './BaseModel'
import config from "../../utils/config"
import {DatabaseException} from "../libs/exception/DatabaseException"

export class BannerModel extends BaseModel {
  constructor() {
    super('banner')
  }

  async getAll (status = [config.status.NORMAL]) {
    let data =  await this.model
      .where('status', 'in', status)
      .fetchAll()

    if (!data) {
      throw new DatabaseException()
    }
    return data.serialize()
  }
}
