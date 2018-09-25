/**
 *  BaseModel.js
 *  Create By rehellinen
 *  Create On 2018/9/25 18:32
 */
import Knex from 'knex'
import Bookshelf from 'bookshelf'
import config from '../../utils/config'

export class DataBase {
  getInstance () {
    if (!this.db) {
      this._connect()
    }
    return this.db
  }

  _connect () {
    const knex = Knex({
      client: 'mysql',
      connection: config.database
    })

    this.db = Bookshelf(knex)
  }
}
