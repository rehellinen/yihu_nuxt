/**
 *  BaseValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 21:21
 */
import {Methods} from "./Methods"

export class BaseValidate extends Methods{
  constructor (rules = {}, scene = {}) {
    super()
    this.rules = rules
    this.scene = scene
  }

  check (ctx, scene, params) {
    let wantedParams = {}
    const paramsFields = this.scene[scene]['params']

    for (let field of paramsFields) {
      const rule = this.rules[field]
      const validateFunc = rule[0]
      const fieldCN = rule[1]

      BaseValidate[validateFunc](params, field, fieldCN)

      wantedParams[field] = params[field]
    }

    ctx.wantedParams = wantedParams
  }
}
