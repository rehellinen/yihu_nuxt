import {SellerModel} from "../../model/SellerModel"

/**
 *  user.js
 *  Create By rehellinen
 *  Create On 2018/10/13 20:05
 */

export const sellerScheme = `
  type Seller {
    id: ID,
    name: String,
    number: Int,
    telephone: Float,
    email: String,
    weixin: String
    zhifubao: String,
    dormitory: Int,
  }
`

export const getSeller = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
