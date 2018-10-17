/**
 *  seller.js
 *  Create By rehellinen
 *  Create On 2018/10/17 17:36
 */
import {getSeller, getSellerById} from "../service/seller"

export const sellerResolver = {
  Seller: {
    normal: async () => await getSeller(),
    one: async (parent, args) => await getSellerById(args)
  }
}
