/**
 *  ThemeModel.js
 *  Create By rehellinen
 *  Create On 2018/10/17 15:54
 */
import {BaseModel} from './BaseModel'

export class ThemeModel extends BaseModel {
  constructor () {
    super({
      relation: ['image']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'theme',
      image: function () {
        return this.hasOne(that.image, 'id', 'image_id')
      }
    })
  }

  async getTheme () {
    let order = ['listorder', 'id']
    return await this.getAll({}, 'image', order)
  }
}
