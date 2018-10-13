import getRawBody from 'raw-body'
import {parseParams} from "../../utils/utils"
import {validateMap} from "../libs/decorator/validate"

export const validate = (app) => {
  const validationHandler = async (ctx, next) => {
    // 获取参数
    let params
    if (ctx.method === 'GET') {
      params = ctx.query
    } else {
      const rawReqBody = await getRawBody(ctx.req, {
        length: ctx.req.headers['content-length'],
        limit: '1mb'
      })
      params = parseParams(rawReqBody)
    }

    // 调用验证器
    const method = ctx.method
    const router = ctx.path
    for (let [conf, validate] of validateMap) {
      let scene = validate.scene[conf.scene]
      if (scene.router === router && scene.method === method) {
        validate.check(conf.scene, params)
      }
    }

    await next()
  }

  app.use(validationHandler)
}
