import {LOGIN,LOGINOUT} from './actionTypes'
import {fromJS} from 'immutable'
// 变为immutable对象，可以改变值
const defaultState = fromJS({
    isLogin: false
})
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return state.set('isLogin', action.data)
        case LOGINOUT:
            return state.set('isLogin', false)
        default:
            return state
    }
}