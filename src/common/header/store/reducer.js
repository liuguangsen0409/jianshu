import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable 对象的 set 方法 会结合之前 immutable 对象的值 和设置的值 返回一个全新的对象
    return state.set('focused', true)
  }

  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}