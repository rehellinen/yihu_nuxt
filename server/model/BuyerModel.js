/**
 *  BuyerModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 22:50
 */
import {BaseModel} from './BaseModel'

export class BuyerModel extends BaseModel{
  constructor () {
    super('buyer')
  }

  getBuyer () {
    this.model.where('id', 11).fetch().then(res => {
      console.log(res)
    })
  }
}

let buyer = new BuyerModel()
buyer.getBuyer()
