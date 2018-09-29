/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 18:18
 */
import {BaseModel} from './BaseModel'

export class AccountModel extends BaseModel{
  async getUserInfo () {
    return await this.request({
      url: '/user'
    })
  }
}
