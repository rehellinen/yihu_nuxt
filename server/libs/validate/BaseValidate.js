/**
 *  BaseValidate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 21:21
 */
export class BaseValidate {
  constructor (rules = {}, scene = {}) {
    this.rules = rules
    this.scene = scene
  }

  check (scene) {
    console.log(scene)
  }
}
