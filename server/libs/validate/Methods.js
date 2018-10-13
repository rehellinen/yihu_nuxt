/**
 *  Methods.js
 *  Create By rehellinen
 *  Create On 2018/10/13 10:24
 */
import {ParamsException} from "../exception/ParamsException"

export class Methods {
  static require (data = {}, field = '', fieldCN = '') {
    if (!data[field]) {
      throw new ParamsException({
        message: `${fieldCN ? fieldCN : field}不能为空`
      })
    }
  }
}
