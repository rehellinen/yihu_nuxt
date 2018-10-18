/**
 *  GoodsModel.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:51
 */
import {BaseModel} from "./BaseModel"
import config from '../../utils/config'
import {ShopModel} from "./ShopModel"
import {SellerModel} from "./SellerModel"

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
    let relation = this._getRelation(type)

    return await this.getOneById(id, {type}, relation)
  }

  async getGoods (condition) {
    let relation = this._getRelation(condition.type)
    return await this.getAll(condition, relation, ['listorder', 'id'])
  }

  async getIndexGoods () {
    // TODO:首页商品优化
    const {sellersId, shopsId} = await this._getSellerAndShop()

    let newGoods = await this.model
      .forge()
      .where('status', config.status.NORMAL)
      .where('type', config.goodsType.NEW)
      .where('foreign_id', 'IN', shopsId)
      .fetchPage({
        pageSize: 6,
        withRelated: ['image']
      })

    let oldGoods = await this.model
      .forge()
      .where('status', config.status.NORMAL)
      .where('type', config.goodsType.OLD)
      .where('foreign_id', 'IN', sellersId)
      .fetchPage({
        pageSize: 6,
        withRelated: ['image']
      })
    return {
      newGoods: newGoods.serialize(),
      oldGoods: oldGoods.serialize()
    }
  }

  async getRecentGoods (shopId) {
    return await this.pagination(
      { pageSize: 12 },
      { foreign_id: shopId },
      ['image']
    )
  }

  async _getSellerAndShop () {
    // 获取通过审核的商家
    const sellers = await (new SellerModel()).getAll()
    const shops = await (new ShopModel()).getAll()

    let sellersId = []
    let shopsId = []

    for (let item of sellers) {
      sellersId.push(item.id)
    }
    for (let item of shops) {
      shopsId.push(item.id)
    }

    return {
      sellersId,
      shopsId
    }
  }

  _getRelation (type) {
    let relation = ['image', 'category']
    if (type === config.goodsType.OLD) {
      relation.push('seller')
    } else if (type === config.goodsType.NEW) {
      relation.push('shop')
    }
    return relation
  }
}
