/**
 *  BannerModel.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:43
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'

export class BannerModel extends BaseModel {
  constructor () {
    super({ image: true })

    let image = this.image

    this.model = this.db.Model.extend({
      tableName: 'banner',
      image: function () {
        return this.hasOne(image, 'id', 'image_id')
      }
    })
  }

  async getBanner () {
    let order = ['listorder', 'id']
    return await this.getAll(config.status.NORMAL, 'image', order)
  }
}
