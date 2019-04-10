import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  articleList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList)
      })
    default:
      return state
  }
}