import config from '../../utils/config'
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'
import getRawBody from 'raw-body'
import {ShopModel} from "../model/ShopModel"
import {SellerModel} from "../model/SellerModel"
import {SuccessMessage} from "../libs/exception/SuccessMessage"

export class Push {
  static async openPush (ctx) {
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

    if (type === config.GOODS_TYPE.NEW) {
      await (new ShopModel()).getShopByInfo(reqData)
    } else {
      await (new SellerModel()).getSellerByInfo(reqData)
    }

    await (new AccountModel()).saveInfo(userId, reqData)
    throw new SuccessMessage({
      message: '开通消息推送服务成功'
    })
  }
}
