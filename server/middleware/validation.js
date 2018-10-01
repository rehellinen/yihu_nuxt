export const validation = (app) => {
  const validationHandler = async (ctx, next) => {
    console.log('check')
    await next()
  }
  app.use(validationHandler)
}
