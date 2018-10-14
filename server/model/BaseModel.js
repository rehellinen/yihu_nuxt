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
   * @param relationName String 关联的模型名称
   * @param order Array 设置排序的字段
   * @return {Promise<void>}
   */
  async getOneById (id, status = [config.status.NORMAL], relationName = '', order = ['id']) {
    let data
    let model = this.model
      .where('id', id)
      .where('status', 'in', status)

    // 排序相关代码
    for (let item of order) {
      model = model.orderBy(item, 'DESC')
    }

    // 关联相关代码
    if (relationName) {
      data = await model.fetch({withRelated: [relationName]})
    } else {
      data = await model.fetch()
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
   * @param order Array 设置排序的字段
   * @return {Promise<*>}
   */
  async getAll (status = [config.status.NORMAL], relationName, order = ['id']) {
    let data
    let model = this.model
      .where('status', 'in', status)

    // 排序相关代码
    for (let item of order) {
      model = model.orderBy(item, 'DESC')
    }

    // 关联相关代码
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
