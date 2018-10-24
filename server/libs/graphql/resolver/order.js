import {getOrder, getOrderSeller, getDeleted} from "../service/order"
import config from '../../../../utils/config'

export const orderResolver = {
  Order: {
    unpaid: async (parent, args, ctx) => await getOrder(config.ORDER_TYPE.UNPAID, ctx),
    paid: async (parent, args, ctx) => await getOrder(config.ORDER_TYPE.PAID, ctx),
    delivered: async (parent, args, ctx) => await getOrder(config.ORDER_TYPE.DELIVERED, ctx),
    completed: async (parent, args, ctx) => await getOrder(config.ORDER_TYPE.COMPLETED, ctx),
    paidButNoGoods: async (parent, args, ctx) => await getOrder(config.ORDER_TYPE.PAID_BUT_NO_GOODS, ctx),
    deleted: async (parent, args, ctx) => await getDeleted(ctx),
    withdrawing: async (parent, args, ctx) => await getOrderSeller(config.ORDER_TYPE.WITHDRAWING, ctx),
    withdrawn: async (parent, args, ctx) => await getOrderSeller(config.ORDER_TYPE.WITHDRAWN, ctx)
  }
}
