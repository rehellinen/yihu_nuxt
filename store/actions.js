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
    console.log(data)
    commit(types.SAVE_USER_INFO, data)
  }
}

export {actions}
