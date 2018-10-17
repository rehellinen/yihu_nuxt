import {SellerModel} from "../../../model/SellerModel"

/**
 *  category.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:36
 */

export const getCategory = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
