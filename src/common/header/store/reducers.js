import {HANDLE_FOCUS, HANDLE_BLUR} from './actionTypes'

const defaultState = {
    focused: false
}
// 必须是纯函数：输入固定，输出就是固定, 且不能有副作用
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === HANDLE_FOCUS) {
        newState.focused = true
    } else if (action.type === HANDLE_BLUR) {
        newState.focused = false
    }
    return newState
}