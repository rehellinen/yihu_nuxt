import {types} from "../../utils/mime"

export const exception = (app) => {
  const exceptionHandler = async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      ctx.status = e.httpCode
      ctx.type = types.json
      ctx.body = e.getErrorMessage()
    }
  }

  app.use(exceptionHandler)
}
