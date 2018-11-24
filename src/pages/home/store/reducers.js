import {INIT_HOME, ADD_LIST, SHOW_ARROW} from './actionTypes'
import {fromJS} from 'immutable'
// 变为immutable对象，可以改变值
const defaultState = fromJS({
    topicList: [],
    list: [],
    recommendList: [],
    page: 1,
    showArrow: false
})
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    switch (action.type) {
        case INIT_HOME:
            return state.merge({
                topicList: action.data.get('topicList'),
                list: action.data.get('list'),
                recommendList: action.data.get('recommendList')
            })
        case ADD_LIST:
            const newList = state.get('list').concat(action.data)
            return state.set('list', newList).set('page', state.get('page') + 1)
        case SHOW_ARROW:
            return state.set('showArrow', action.showArrow)
        default:
            return state
    }
}