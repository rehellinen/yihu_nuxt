/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import axios from 'axios'
import config from '../server/utils/config'

const actions = {
  async getWechatSignature ({commit}, url) {
    const data = await axios.get(`${config.restUrl}/signature`, {
      params: {
        url
      }
    })
    commit(types.SAVE_SIGNATURE, data.data)
  }
}

export {actions}
