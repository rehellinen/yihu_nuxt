/**
 *  actions.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:43
 */
import {types} from './mutation-types'
import axios from 'axios'
import config from '../utils/config'
import {AccountModel} from '../client/model/AccountModel'
import {Token} from '../client/utils/Token'

const actions = {
  async getUserInfo ({commit}) {
    let data = await (new AccountModel()).getUserInfo()
    commit(types.SAVE_USER_INFO, data)
  },

  async getToken ({commit}, code) {
    let token = await (new Token()).verify(code)
    commit(types.SAVE_TOKEN, token)
  }
}

export {actions}
