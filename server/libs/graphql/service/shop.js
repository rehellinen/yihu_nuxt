/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:33
 */
import {SellerModel} from "../../../model/SellerModel"

export const getShop = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
