/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 22:46
 */
import {DataBase} from './DataBase'

export class BaseModel {
  /**
   * 初始化模型
   * @param modelName 模型名称
   */
  constructor (modelName) {
    const db = new DataBase().getInstance()
    this.model = db.Model.extend({
      tableName: modelName
    })
  }
}
