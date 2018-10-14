/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 22:46
 */
import {DataBase} from './DataBase'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"
import {isEmptyObj} from "../../utils/utils"

export class BaseModel {
  /**
   * 初始化模型
   */
  constructor (conf = {}) {
    this.db = DataBase.getInstance()
    if (conf.image) {
      this.image = this.db.Model.extend({
        tableName: 'image'
      })
    }
  }

  /**
   * 根据id获取数据
   * @param id int 数据的ID
   * @param status Array 要查询的数据的status
   * @param relation Object 放置关联的相关信息
   * @return {Promise<void>}
   */
  async getOneById (id, status = [config.status.NORMAL], relation = {}) {
    let data
    const model = this.model
      .where('id', id)
      .where('status', 'in', status)

    if (isEmptyObj(relation)) {
      data = model.fetch()
    } else {
      data = model.hasOne(relation.model, relation.foreignKey, relation.foreignKeyTarget)
    }

    if (!data) {
      throw new DatabaseException()
    }
    return data.attributes
  }

  /**
   * 获取所有数据
   * @param status Array 要查询的数据的status
   * @param relationName String 关联的模型名称
   * @return {Promise<*>}
   */
  async getAll (status = [config.status.NORMAL], relationName) {
    let data
    const model = this.model
      .where('status', 'in', status)

    if (relationName) {
      data = await model.fetchAll({withRelated: [relationName]})
    } else {
      data = await model.fetchAll()
    }

    if (!data) {
      throw new DatabaseException()
    }
    return data.serialize()
  }
}
