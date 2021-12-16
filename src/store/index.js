import { createStore, createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getter'
import * as actions from './actions'

const debug = process.env.NODE_EVN !== 'production'
export default createStore({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []

})
