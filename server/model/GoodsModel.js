/**
 *  GoodsModel.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:51
 */
import {BaseModel} from "./BaseModel"
import config from '../../utils/config'

export class GoodsModel extends BaseModel{
  constructor () {
    super({
      relation: ['image', 'seller', 'shop', 'theme_category']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'goods',
      image: function () {
        return this.hasOne(that.image, 'id', 'image_id')
      },
      seller: function () {
        return this.hasOne(that.seller, 'id', 'foreign_id')
      },
      shop: function () {
        return this.hasOne(that.shop, 'id', 'foreign_id')
      },
      category: function () {
        return this.hasOne(that.theme_category, 'id', 'category_id')
      }
    })
  }

  async getOneGoods (id, type) {
    let relation = ['image', 'category']
    if (type === config.sellerType.SELLER) {
      relation.push('seller')
    } else {
      relation.push('shop')
    }

    return await this.getOneById(id, {type}, relation)
  }
}
