import {HANDLE_FOCUS, HANDLE_BLUR, INIT_LIST, Hot_Switch, HANDLE_MOUSE_ENTER, HANDLE_MOUSE_OVER} from './actionTypes'
import {fromJS} from 'immutable'
// 变为immutable对象，可以改变值
const defaultState = fromJS({
    focused: false,
    mouseEnter: false,
    list: [],
    index: 1
})
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    switch (action.type) {
        case HANDLE_FOCUS:
            return state.set('focused', true)
        case HANDLE_BLUR:
            return state.set('focused', false)
        case INIT_LIST:
            return state.set('list', action.list) // 连续set可以用merge代替
        case Hot_Switch:
            const currentState = state.toJS()
            const pages = Math.ceil(currentState.list.length / 10)
            const newIndex = (pages === currentState.index) ? 1 : (currentState.index + 1)
            return state.set('index', newIndex).set('rotate', currentState.rotate + 360)
        case HANDLE_MOUSE_ENTER:
            return state.set('mouseEnter', true)
        case HANDLE_MOUSE_OVER:
            return state.set('mouseEnter', false)
        default:
            return state
    }
}