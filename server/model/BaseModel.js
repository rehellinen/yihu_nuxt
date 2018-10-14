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
   * @param id int 数据的ID
   * @param status Array 要查询的数据的status
   * @param relation Object 放置关联的相关信息
   * @return {Promise<void>}
   */
  async getOneById (id, status = [config.status.NORMAL], relation = {}) {
    let data =  await this.model
      .where('id', id)
      .where('status', 'in', status)
      .fetch()
    if (!data) {
      throw new DatabaseException()
    }
    return data.attributes
  }

  /**
   * 获取所有数据
   * @param status Array 要查询的数据的status
   * @return {Promise<*>}
   */
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
