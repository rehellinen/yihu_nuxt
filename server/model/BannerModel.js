/**
 *  BannerModel.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:43
 */
import {BaseModel} from './BaseModel'
import config from '../../utils/config'
import {DatabaseException} from "../libs/exception/DatabaseException"

export class BannerModel extends BaseModel {
  constructor() {
    super('banner')
  }
}
