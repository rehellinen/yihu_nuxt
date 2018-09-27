/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import axios from 'axios'
import config from '../server/utils/config'

const actions = {
  getWechatSignature ({commit}) {
    axios.get(config.restUrl + '/signature')
  }
}

export {actions}
