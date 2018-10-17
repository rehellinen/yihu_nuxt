import {SellerModel} from "../../../model/SellerModel"

/**
 *  user.js
 *  Create By rehellinen
 *  Create On 2018/10/13 20:05
 */

export const getSeller = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
