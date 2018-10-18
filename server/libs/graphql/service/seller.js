import {SellerModel} from "../../../model/SellerModel"
import {Token} from "../../token/Token"

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

export const handleHide = (parent, args, context) => {
  Token.checkToken(context)
  return {
    number: parent.number,
    dormitory: parent.dormitory
  }
}
