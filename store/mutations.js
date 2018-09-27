/**
 *  mutations.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:44
 */
import {types} from './mutation-types'

export const mutations = {
  [types.SAVE_SIGNATURE] (state, sign) {
    state.signature = sign
  }
}
