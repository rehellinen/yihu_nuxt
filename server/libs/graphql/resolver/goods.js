import {getGoods, getIndexGoods, getOneGoods, getRecentGoods} from "../service/goods"
import config from '../../../../utils/config'

/**
 *  banner.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:42
 */
export const goodsResolver = {
  Goods: {
    index: async () => await getIndexGoods(),
    one: async (parent, args) => await getOneGoods(args),
    type: async (parent, args) => await await getGoods(args),
    recent: async (parent, args) => await await getRecentGoods(args),
    category: async (parent, args) => await getGoods({category_id: args.id}),
    seller: async (parent, args) => await getGoods({ foreign_id: args.id, type: config.sellerType.SELLER}),
    shop: async (parent, args) => await getGoods({ foreign_id: args.id, type: config.sellerType.SHOP})
  }
}
