/**
 *  order.js
 *  Create By rehellinen
 *  Create On 2018/10/24 8:50
 */
import {OrderModel} from "../../../model/OrderModel"
import {Token} from "../../token/Token"
import config from '../../../../utils/config'

export const getOrder = async (status, ctx) => {
  let cond = {status}
  const tokenScope = Token.getSpecifiedValue(ctx, 'scope')
  const uid = Token.getSpecifiedValue(ctx, 'id')

  if (tokenScope === config.SCOPE.BUYER) {
    cond.buyer_id = uid
  } else if (tokenScope === config.SCOPE.SHOP) {
    cond.foreign_id = uid
    cond.type = config.GOODS_TYPE.NEW
  } else if (tokenScope === config.SCOPE.SELLER) {
    cond.foreign_id = uid
    cond.type = config.GOODS_TYPE.OLD
  }

  return await (new OrderModel()).getOrder(cond)
}

export const getDeleted = async (ctx) => {
  Token.checkScope(ctx, config.SCOPE.SUPER)

  return await (new OrderModel()).getOrder({status: config.ORDER_TYPE.DELETED})
}

export const getOrderSeller = async () => {

}
