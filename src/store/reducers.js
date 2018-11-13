import {CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_ITEM, INIT_LIST} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}
// 必须是纯函数：输入固定，输出就是固定, 且不能有副作用
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
    } else if (action.type === ADD_LIST_VALUE) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
    } else if (action.type === DELETE_ITEM) {
        newState.list.splice(action.index, 1)
    } else if (action.type === INIT_LIST) {
        newState.list = action.list
    }
    return newState
}