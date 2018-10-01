import {types} from '../../utils/mime'
import config from '../../utils/config'
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'
import getRawBody from 'raw-body'
import {ShopModel} from "../model/ShopModel"
import {SellerModel} from "../model/SellerModel"

export class Push {
  static openPush () {
    return async (ctx, next) => {
      const userId = TokenService.getSpecifiedValue(ctx)

      // req 相关
      const reqDataRaw = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })

      const reqData = JSON.parse(reqDataRaw.toString())
      const number = reqData.number
      const telephone = reqData.telephone
      const type = reqData.type

      if (userId) {
        if (type === config.sellerType.SHOP) {
          const shop = await (new ShopModel()).getShopByInfo(reqData)
          if (!shop) {
            ctx.body = 'fail'
            ctx.status = 404
          } else {
            await (new AccountModel()).saveInfo(userId, reqData)
            ctx.body = 'success'
          }
        } else {
          const seller = await (new SellerModel()).getSellerByInfo(reqData)
          if (!seller) {
            ctx.body = 'fail'
            ctx.status = 404
          } else {
            await (new AccountModel()).saveInfo(userId, reqData)
            ctx.body = 'success'
          }
        }
      }
    }
  }
}
