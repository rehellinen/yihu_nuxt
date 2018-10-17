/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:33
 */
import {ShopModel} from "../../../model/ShopModel"

export const getShop = async () => {
  return await (new ShopModel()).getNormalShop()
}
