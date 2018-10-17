/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/17 16:20
 */
import {getShop, getShopById} from "../service/shop"

export const shopResolver = {
  Shop: {
    normal: async () => await getShop(),
    one: async (parent, args) => await getShopById(args)
  }
}
