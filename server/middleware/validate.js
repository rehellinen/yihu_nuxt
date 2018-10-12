import getRawBody from 'raw-body'
import {parseParams} from "../../utils/utils"
import {validateMap} from "../libs/decorator/validate"

export const validate = (app) => {
  const validationHandler = async (ctx, next) => {
    // 获取参数
    const rawReqBody = await getRawBody(ctx.req, {
      length: ctx.req.headers['content-length'],
      limit: '1mb'
    })
    const params = parseParams(rawReqBody)

    handle(ctx)

    await next()
  }

  app.use(validationHandler)
}

const handle  = (ctx) => {
  const method = ctx.method
  const router = ctx.path
  for (let [conf, validate] of validateMap) {
    let scene = validate.scene[conf.scene]
    if (scene.router === router && scene.method === method) {
      validate.check(conf.scene)
    }
  }
}
