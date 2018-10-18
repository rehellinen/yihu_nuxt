import {getGoods, getIndexGoods, getOneGoods, getRecentGoods} from "../service/goods"

/**
 *  banner.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:42
 */
export const goodsResolver = {
  Goods: {
    index: async () => await getIndexGoods(),
    one: async (parent, args) => await getOneGoods(args),
    type: async (parent, args) => await await getGoods(args, args.page),
    recent: async (parent, args) => await await getRecentGoods(args),
    category: async (parent, args) => await getGoods({category: args.id}, args.page),
    seller: async (parent, args) => await getGoods({seller: args.id}, args.page),
    shop: async (parent, args) => await getGoods({shop: args.id}, args.page),
  }
}
