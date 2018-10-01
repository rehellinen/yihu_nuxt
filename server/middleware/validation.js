export const validation = (app) => {
  const validationHandler = async (ctx, next) => {
    console.log('check')
    next()
  }
  app.use(validationHandler)
}
