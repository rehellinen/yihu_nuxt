/**
 *  AccountModel.js
 *  Create By rehellinen
 *  Create On 2018/9/29 9:35
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

export class ShopModel extends BaseModel {
  constructor () {
    super({
      relation: ['image']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'shop',
      avatar_image: function () {
        return this.hasOne(that.image, 'id', 'avatar_image_id')
      },
      top_image: function () {
        return this.hasOne(that.image, 'id', 'top_image_id')
      }
    })
  }

  async getNormalShop () {
    const pageConf = {
      pageSize: 12,
      page: 1
    }
    const relation = ['avatar_image', 'top_image']
    const order = ['listorder', 'id']

    return await this.pagination(pageConf, {}, relation, order)
  }

  async getShopById (id) {
    const relation = ['avatar_image', 'top_image']
    return await this.getOneById(id, {}, relation)
  }

  async getShopByInfo (data) {
    const condition = {
      number: data.number,
      telephone: data.telephone,
      status: config.STATUS.NORMAL
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
