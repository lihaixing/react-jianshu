// 统一管理action
import {CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_ITEM, INIT_LIST, GET_INIT_LIST} from './actionTypes'

export const getInputChangedAtion = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddListAtion = () => ({
    type: ADD_LIST_VALUE
})
export const getDeleteItemAtion = (index) => ({
    type: DELETE_ITEM,
    index
})
export const initListAction = (list) => ({
    type: INIT_LIST,
    list
})
// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
export const getInitListAction = () => ({
    type: GET_INIT_LIST
})