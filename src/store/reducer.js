import  { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store'

// 把很多小的 reducer 合并成一个大的reducer 提高代码的可维护性
export default combineReducers({
  header: headerReducer
})