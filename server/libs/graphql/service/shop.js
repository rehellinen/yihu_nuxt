/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:33
 */
import {ShopModel} from "../../../model/ShopModel"
import {Token} from "../../token/Token"

export const getShop = async () => {
  return await (new ShopModel()).getNormalShop()
}

export const getShopById = async (args) => {
  return await (new ShopModel()).getShopById(args.id)
}

export const handleHide = (parent, args, context) => {
  Token.checkToken(context)
  return {
    number: parent.number,
    dormitory: parent.dormitory
  }
}
