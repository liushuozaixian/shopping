import {reqData, reqMyClass} from '../api/index'

import {
  RECEIVE_DATA,
  RECEIVE_MYCLASS,
  RECEIVE_PHONENUMBER,
  RECEIVE_ISSHOWGFOODNAVY
} from './mutation-types'


export default {
  getData ({commit}) {
    reqData().then((response) => {
      const data = response.data
      commit(RECEIVE_DATA, {data})
    })
  },
  getMyclass ({commit}, cb) {
    reqMyClass().then((response) => {
      const myclass = response.data
      commit(RECEIVE_MYCLASS, {myclass})
      cb && cb()
    })
  },
  register ({commit}, phonenumber) {
    commit (RECEIVE_PHONENUMBER, {phonenumber})
  },
  isShowGfoodnavy ({commit}, bool) {
    commit (RECEIVE_ISSHOWGFOODNAVY,{bool})
  }
}
