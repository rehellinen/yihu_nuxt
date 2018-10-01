export const validation = (app) => {
  const validationHandler = async (ctx, next) => {
    await next()
  }
  app.use(validationHandler)
}
