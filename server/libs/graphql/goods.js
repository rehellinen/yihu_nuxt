import {GoodsModel} from "../../model/GoodsModel"
import {ParamsException} from "../exception/ParamsException"

/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const indexGoodsScheme = `
  type indexGoods {
    newGoods: [Goods],
    oldGoods: [Goods]
  }
`

export const goodsScheme = `
  type Goods {
    id: ID,
    name: String,
    price: Float,
    quantity: Int,
    description: String,
    status: Int,
    subtitle: String,
    type: Int,
    listorder: Int,
    seller: Seller,
    shop: Shop,
    image: Image,
    category: Category  
  }
`

export const getOneGoods = async (parent, args) => {
  return await (new GoodsModel()).getOneGoods(args.id, args.type)
}

export const getGoods = async (parent, args) => {
  if (args.foreign_id) {
    if (!args.type) {
      throw new ParamsException({
        message: '必须指定type'
      })
    }
  }
  return await (new GoodsModel()).getGoods(args)
}

export const getIndexGoods = async () => {
  return await (new GoodsModel()).getIndexGoods()
}
