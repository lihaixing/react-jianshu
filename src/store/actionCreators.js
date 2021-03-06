// 统一管理action
import {CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_ITEM, INIT_LIST} from './actionTypes'
import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

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
export const getInitListAction = () => {
    return (dispatch) => {
        axios.get(apiUrl + '/api/todolist').then((res) => {
            const action = initListAction(res.data)
            dispatch(action)
        })
    }
}