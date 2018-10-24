import {getOrder, getOrderSeller, getOrderSuper} from "../service/order"
import config from '../../../../utils/config'

export const goodsResolver = {
  Goods: {
    unpaid: async () => await getOrder(config.ORDER_TYPE.UNPAID),
    paid: async () => await getOrder(config.ORDER_TYPE.PAID),
    delivered: async () => await getOrder(config.ORDER_TYPE.DELIVERED),
    paidButNoGoods: async () => await getOrder(config.ORDER_TYPE.PAID_BUT_NO_GOODS),
    deleted: async () => await getOrderSuper(),
    withdrawing: async () => await getOrderSeller(config.ORDER_TYPE.WITHDRAWING),
    withdrawn: async () => await getOrderSeller(config.ORDER_TYPE.WITHDRAWN)
  }
}
