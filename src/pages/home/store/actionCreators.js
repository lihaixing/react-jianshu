// 统一管理action
import {INIT_HOME, ADD_LIST, SHOW_ARROW} from './actionTypes'
import {fromJS, List} from 'immutable'

import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

export const initHomeAction = (data) => ({
    type: INIT_HOME,
    data: fromJS(data)
})

// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
export const getHomeActon = () => {
    return (dispatch) => {
        axios.get(apiUrl + '/api/home').then((res) => {
            const data = res.data
            if (data.status === 'success') {
                const action = initHomeAction(data.data)
                dispatch(action)
            }
        })
    }
}

export const addListAction = (data) => ({
    type: ADD_LIST,
    data: List(data)
})

export const getLoadMoreAction = (page) => {
    return (dispatch) => {
        axios.get(apiUrl + '/api/loadMore?page=' + page).then((res) => {
            const data = res.data
            if (data.status === 'success') {
                const action = addListAction(data.data)
                dispatch(action)
            }
        })
    }
}

export const getShowArrowAction = (flag) => ({
    type: SHOW_ARROW,
    showArrow: flag
})