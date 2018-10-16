/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"
import {SellerModel} from "./SellerModel"

export class ShopModel extends BaseModel {
  constructor () {
    super({
      relation: ['avatar_image', 'top_image']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'shop',
      avatar_image: function () {
        return this.hasOne(that.avatar_image, 'id', 'avatar_image_id')
      },
      top_image: function () {
        return this.hasOne(that.top_image, 'id', 'top_image_id')
      }
    })
  }

  async getShopByInfo (data) {
    const condition = {
      number: data.number,
      telephone: data.telephone,
      status: config.status.NORMAL
    }

    const user = await this.model
      .where(condition)
      .fetch()

    if (!user) {
      throw new DatabaseException()
    } else {
      return user.attributes
    }
  }
}
