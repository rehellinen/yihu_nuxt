import {getGoods, getIndexGoods, getOneGoods, getRecentGoods} from "../service/goods"
import config from '../../../../utils/config'

/**
 *  banner.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:42
 */
export const goodsResolver = {
  Goods: {
    async index () {
      return await getIndexGoods()
    },
    async category (parent, args) {
      return await getGoods({
        category_id: args.id
      })
    },
    async seller (parent, args) {
      return await getGoods({
        seller_id: args.id,
        type: config.sellerType.SELLER
      })
    },
    async shop (parent, args) {
      return await getGoods({
        shop_id: args.id,
        type: config.sellerType.SHOP
      })
    },
    async one (parent, args) {
      return await getOneGoods(args)
    },
    async recent (parent, args) {
      return await getRecentGoods(args)
    }
  }
}
