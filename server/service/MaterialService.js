/**
 *  微信公众号素材类
 *  UploadMaterial.js
 *  Create By rehellinen
 *  Create On 2018/9/27 11:02
 */

import {AccessTokenService} from './AccessTokenService'
import config from '../../utils/config'
import axios from 'axios'

const {apiUrl} = config

export class MaterialService {
  constructor () {
    this.token = new AccessTokenService().get()
  }

  /**
   * 上传素材
   * @param type
   * @param material
   * @param isPermanent
   */
  upload (type, material, isPermanent = true) {
    this._prepareData(type, material, isPermanent)
  }

  /**
   * 获取素材
   */
  get () {

  }

  _prepareData (type, material, isPermanent) {

  }

  _request () {

  }
}
