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
    const db = DataBase.getInstance()
    let modelClass = db.Model.extend({
      tableName: modelName
    })
    this.model = new modelClass()
  }
}
