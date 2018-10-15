import {BannerModel} from "../../model/BannerModel"

/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const goodsScheme = `
  type Goods {
    id: ID,
    name: String,
    image: Image,
    price: Float,
    quantity: Int,
    description: String,
    seller: Seller,
    shop: Shop,
    status: Int,
    subtitle: String,
    type: Int,
    category: Category,
    listorder: Int,    
  }
`

export const getGoods = async () => {
  return await (new BannerModel()).getBanner()
}
