import { fromJS } from 'immutable'
import * as actionTypes from './constants'

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  articleList: [],
  articlePage: 1,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList)
      })
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })


      state.set('articleList', state.get('articleList').concat(action.list))
    default:
      return state
  }
}