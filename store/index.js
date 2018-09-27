/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/8/15 15:42
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {state} from './state'
import {mutations} from './mutations'
import {actions} from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  strict: true,
  plugins: [createLogger()]
})

export default store
