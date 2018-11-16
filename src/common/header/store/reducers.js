import {HANDLE_FOCUS, HANDLE_BLUR} from './actionTypes'
import {fromJS} from 'immutable'
// 变为immutable对象，可以改变值
const defaultState = fromJS({
    focused: false
})
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    if (action.type === HANDLE_FOCUS) {
        return state.set('focused',true)
    } else if (action.type === HANDLE_BLUR) {
        return state.set('focused',false)
    }
    // state已经是immutable对象
    return state
}