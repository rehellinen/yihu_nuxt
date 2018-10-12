/**
 *  validate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 21:24
 */
export const validateMap = new Map()

export const validate = (validateName, scene) => {
  // TODO: 验证name首字母是否大写
  const Validate = require(`../validate/${validateName}Validate`)[`${validateName}Validate`]

  let conf = {
    name: validateName,
    scene
  }
  return (target, key) => {
    target[key].prototype.url = '123'
    console.log(target[key].prototype)
    validateMap.set(conf, new Validate())
  }
}
