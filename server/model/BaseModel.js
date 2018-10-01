/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 22:46
 */
import {DataBase} from './DataBase'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

export class BaseModel {
  /**
   * 初始化模型
   * @param modelName 模型名称
   */
  constructor (modelName) {
    const db = DataBase.getInstance()
    this.model = db.Model.extend({
      tableName: modelName
    })
  }

  /**
   * 根据id获取数据
   * @param id
   * @return {Promise<void>}
   */
  async getOneById (id) {
    const condition = {
      id,
      status: config.status.NORMAL
    }

    let data =  await this.model
      .where(condition)
      .fetch()
    if (!data) {
      throw new DatabaseException()

    }
    return data.attributes
  }
}
