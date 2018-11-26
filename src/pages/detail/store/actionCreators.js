// 统一管理action
import {INIT_DETAIL} from './actionTypes'
import {fromJS} from 'immutable'

import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

export const initDetailAction = (data) => ({
    type: INIT_DETAIL,
    data: fromJS(data)
})

// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
export const getInitDetailAction = (id) => {
    return (dispatch) => {
        axios.get(apiUrl + '/api/detail/' + id).then((res) => {
            const data = res.data
            if (data.status === 'success') {
                const action = initDetailAction(data.data)
                dispatch(action)
            }
        })
    }
}