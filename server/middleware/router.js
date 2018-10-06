import Router from 'koa-router'
import {routerMap} from "../libs/decorator/Router"
import {resolve} from "path"
import glob from 'glob'


export const router = (app) => {
  const router = new Router()

  glob.sync(resolve(__dirname, '../controller', './*.js'))
    .forEach(require)
  for (let [conf, controller] of routerMap) {
    const routerPath = conf.target.routerPrefix + conf.path
    router[conf.method](routerPath, controller)
  }

  app.use(router.routes())
  app.use(router.allowedMethods())
}
