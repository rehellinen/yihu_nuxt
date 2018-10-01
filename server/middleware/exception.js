export const exception = (app) => {
  const exceptionHandler = async (ctx, next) => {
    await next()
    console.log(ctx.status)
  }
  app.use(exceptionHandler)
}
