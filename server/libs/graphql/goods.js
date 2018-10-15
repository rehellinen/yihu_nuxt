import {BannerModel} from "../../model/BannerModel"
import {GoodsModel} from "../../model/GoodsModel"

/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
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
  if (args.type) {
    return [
      {
        id: 1,
        name: 'etst'
      },


      {
        id: 2,
        name: 'etst2222'
      }]
  } else {
    return {
      id: 1,
      name: 'etst'
    }
  }

  // return await (new BannerModel()).getBanner()
}
