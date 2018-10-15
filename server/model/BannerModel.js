/**
 *  BannerModel.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:43
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'

export class BannerModel extends BaseModel {
  constructor () {
    super({
      relation: ['image']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'banner',
      image: function () {
        return this.hasOne(that.image, 'id', 'image_id')
      }
    })
  }

  async getBanner () {
    let order = ['listorder', 'id']
    return await this.getAll({}, 'image', order)
  }
}
