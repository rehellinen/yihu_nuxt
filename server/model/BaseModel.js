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
   * @param conf Object
   *  - relation Array 定义需要进行关联的模型
   */
  constructor (conf = {}) {
    this.db = DataBase.getInstance()

    // 初始化需要进行关联的模型
    if (conf.relation && Array.isArray(conf.relation)) {
      for (let item of conf.relation) {
        this.generateModel(item)
      }
    }
  }

  generateModel (modelName) {
    this[modelName] = this.db.Model.extend({
      tableName: modelName
    })
  }

  /**
   * 根据id获取数据
   * @param id int 数据的ID
   * @param condition Object 要查询的数据的条件
   * @param relation String 关联的模型名称
   * @return {Promise<void>}
   */
  async getOneById (id, condition = {}, relation = []) {
    let data
    let model = this.model.where('id', id)

    // 条件相关代码
    if (!condition.hasOwnProperty('status')){
      condition['status'] = config.status.NORMAL
    }
    for (let key in condition) {
      model = model.where(key, 'in', condition[key])
    }

    data = await model.fetch({withRelated: relation})

    if (!data) {
      throw new DatabaseException()
    }
    return data.serialize()
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
