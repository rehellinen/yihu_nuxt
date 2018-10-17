import {SellerModel} from "../../../model/SellerModel"

/**
 *  theme.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:42
 */

export const getTheme = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
