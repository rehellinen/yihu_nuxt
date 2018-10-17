import {SellerModel} from "../../../model/SellerModel"

/**
 *  user.js
 *  Create By rehellinen
 *  Create On 2018/10/13 20:05
 */

export const getSeller = async () => {
  return await (new SellerModel()).getNormalSeller()
}

export const getSellerById = async (args) => {
  return await (new SellerModel()).getSellerById(args.id)
}
