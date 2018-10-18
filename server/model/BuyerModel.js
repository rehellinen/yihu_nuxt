/**
 *  BuyerModel.js
 *  Create By rehellinen
 *  Create On 2018/10/18 15:55
 */
import {BaseModel} from './BaseModel'

export class BuyerModel extends BaseModel {
  constructor() {
    super()

    this.model = this.db.Model.extend({
      tableName: 'buyer'
    })
  }
}
