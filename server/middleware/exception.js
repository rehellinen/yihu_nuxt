import {types} from "../../utils/mime"

export const exception = (app) => {
  const exceptionHandler = async (ctx, next) => {
    try {
      await next()
      console.log(ctx.status)
    } catch (e) {
      ctx.type = types.json
      ctx.body = e.getErrorMessage()
    }
  }

  app.use(exceptionHandler)
}
