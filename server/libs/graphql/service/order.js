/**
 *  order.js
 *  Create By rehellinen
 *  Create On 2018/10/24 8:50
 */
import {OrderModel} from "../../../model/OrderModel"
import {Token} from "../../token/Token"
import config from '../../../../utils/config'

export const getOrder = async (status, ctx) => {
  Token.checkToken(ctx)

  return await (new OrderModel()).getOrderByStatus(status)
}

export const getOrderSuper = async () => {

}

export const getOrderSeller = async () => {

}
