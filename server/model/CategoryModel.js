/**
 *  CategoryModel.js
 *  Create By rehellinen
 *  Create On 2018/10/17 16:01
 */

import {BaseModel} from './BaseModel'

export class CategoryModel extends BaseModel {
  constructor () {
    super({
      relation: ['image', 'theme']
    })

    let that = this

    this.model = this.db.Model.extend({
      tableName: 'theme_category',
      image: function () {
        return this.hasOne(that.image, 'id', 'image_id')
      },
      theme: function () {
        return this.hasOne(that.theme, 'id', 'theme_id')
      }
    })
  }

  async getCategoryById (id) {
    let order = ['listorder', 'id']
    return await this.getAll({theme_id: id}, 'image', order)
  }
}
