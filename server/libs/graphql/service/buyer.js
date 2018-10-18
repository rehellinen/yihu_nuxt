/**
 *  buyer.js
 *  Create By rehellinen
 *  Create On 2018/10/18 16:15
 */
import {Token} from "../../token/Token"
import config from '../../../../utils/config'
import {BuyerModel} from "../../../model/BuyerModel"

export const getBuyer = async (parent, args, context) => {
  Token.checkScope(context.request, config.SCOPE.BUYER)
  const buyerId = Token.getSpecifiedValue(context.request)

  return await (new BuyerModel()).getBuyerById(buyerId)
}
