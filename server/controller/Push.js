import {types} from '../../utils/mime'
import {AccountModel} from '../model/AccountModel'
import {TokenService} from '../service/TokenService'

export class Push {
  static openPush () {
    return async (ctx, next) => {
      const userId = TokenService.getSpecifiedValue(ctx)
      const inputNumber = ctx.query.number
      const inputTelephone = ctx.query.telephone
      if (userId) {
        const account = await (new AccountModel()).getOneById(userId)

        ctx.type = types.json
        ctx.body = JSON.stringify(data)
      }
    }
  }
}
