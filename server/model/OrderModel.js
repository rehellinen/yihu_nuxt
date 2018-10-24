import {BaseModel} from "./BaseModel"

/**
 *  OrderModel.js
 *  Create By rehellinen
 *  Create On 2018/10/24 9:00
 */
export class OrderModel extends BaseModel {
  constructor() {
    super({
      relation: ['seller', 'shop', 'goods']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'order',
      seller: function () {
        return this.hasOne(that.seller, 'id', 'foreign_id')
      },
      shop: function () {
        return this.hasOne(that.shop, 'id', 'foreign_id')
      },
      goods: function () {
        return this.hasMany(that.goods, 'id', 'order_id')
      }
    })
  }

  async getOrder (cond) {
    let pageConf = {
      pageSize: 8,
      page: 1
    }
    return await this.pagination(pageConf, cond)
  }
}
