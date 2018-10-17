/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:33
 */
import {SellerModel} from "../../../model/SellerModel"

export const shopScheme = `
  type Shop {
    id: ID,
    name: String,
    number: Int,
    telephone: Float,
    email: String,
    weixin: String
    zhifubao: String,
    major: String,
    top_image: Image,
    avatar_image: Image,
    dormitory: Int,
    listorder: Int,
    status: Int
  }
`

export const getShop = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}
