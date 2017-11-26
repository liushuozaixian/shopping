import {
  RECEIVE_DATA,
  RECEIVE_MYCLASS,
  RECEIVE_PHONENUMBER,
  RECEIVE_ISSHOWGFOODNAVY
} from './mutation-types'

export default {
  [RECEIVE_DATA] (state, {data}) {
    state.main = data
  },
  [RECEIVE_MYCLASS] (state, {myclass}) {
    state.myclass = myclass
  },
  [RECEIVE_PHONENUMBER] (state, {phonenumber}) {
    state.register.phonenumber = phonenumber
  },
  [RECEIVE_ISSHOWGFOODNAVY] (state, {bool}) {
    state.isShowG.foodnavy = bool
  }
}
