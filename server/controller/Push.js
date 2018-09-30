import {types} from '../../utils/mime'
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'
import getRawBody from 'raw-body'

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
      console.log(reqData)
      if (userId) {
        // const account = await (new AccountModel()).getOneById(userId)
        // ctx.type = types.json
        ctx.body = 'test'
      }
    }
  }
}
