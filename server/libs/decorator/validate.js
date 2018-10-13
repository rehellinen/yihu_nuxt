/**
 *  validate.js
 *  Create By rehellinen
 *  Create On 2018/10/12 21:24
 */
export const validateMap = new Map()

export const validate = ({name, scene}) => {
  // TODO: 验证name首字母是否大写
  const Validate = require(`../validate/${name}Validate`)[`${name}Validate`]

  let conf = {
    name,
    scene
  }
  return (target, key) => {
    validateMap.set(conf, new Validate())
  }
}
