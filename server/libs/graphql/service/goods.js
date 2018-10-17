import {GoodsModel} from "../../../model/GoodsModel"
import {ParamsException} from "../../exception/ParamsException"

/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const getOneGoods = async (args) => {
  return await (new GoodsModel()).getOneGoods(args.id, args.type)
}

export const getGoods = async (args) => {
  return await (new GoodsModel()).getGoods(args)
}

export const getIndexGoods = async () => {
  return await (new GoodsModel()).getIndexGoods()
}

export const getRecentGoods = async (args) => {
  return await (new GoodsModel()).getRecentGoods(args.id)
}
