/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import axios from 'axios'
import config from '../utils/config'
import {AccountModel} from '../client/model/AccountModel'

const actions = {
  async getUserInfo ({commit}) {
    let data = await (new AccountModel()).getUserInfo()
    if (data === 401) {
      setTimeout(async () => {
        let data = await (new AccountModel()).getUserInfo()
        commit(types.SAVE_USER_INFO, data)
      }, 2000)
    } else {
      commit(types.SAVE_USER_INFO, data)
    }
  }
}

export {actions}
