import {GoodsModel} from "../../../model/GoodsModel"
import config from '../../../../utils/config'
/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const getOneGoods = async (args) => {
  return await (new GoodsModel()).getOneGoods(args.id, args.type)
}

export const checkGoods = async (args) => {
  let str = args.id
  let ids = str.split('|')
  return await (new GoodsModel()).checkGoods(ids)
}

export const getGoods = async (args, page) => {
  let condition = {}

  if (args.hasOwnProperty('type')) {
    condition.type = args.type
  }
  if (args.hasOwnProperty('category')) {
    condition.category_id = args.category
  }
  if (args.hasOwnProperty('seller')) {
    condition.foreign_id = args.seller
    condition.type = config.GOODS_TYPE.OLD
  }
  if (args.hasOwnProperty('shop')) {
    condition.foreign_id = args.shop
    condition.type = config.GOODS_TYPE.NEW
  }

  return await (new GoodsModel()).getGoods(condition, page)
}

export const getIndexGoods = async () => {
  return await (new GoodsModel()).getIndexGoods()
}

export const getRecentGoods = async (args) => {
  return await (new GoodsModel()).getRecentGoods(args.id)
}
