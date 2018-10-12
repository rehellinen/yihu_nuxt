import getRawBody from 'raw-body'
import {parseParams} from "../../utils/utils"

export const validation = (app) => {
  const validationHandler = async (ctx, next) => {
    const rawReqBody = await getRawBody(ctx.req, {
      length: ctx.req.headers['content-length'],
      limit: '1mb'
    })

    ctx.bodyParams = parseParams(rawReqBody)
    await next()
  }
  app.use(validationHandler)
}
