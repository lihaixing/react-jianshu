// 统一管理action
import {LOGIN,LOGINOUT} from './actionTypes'
import {fromJS} from 'immutable'

import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json';

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

export const loginAction = (data) => ({
    type: LOGIN,
    data: fromJS(data)
})

// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
export const getLoginAction = (account, password) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: apiUrl + '/api/login',
            data: JSON.stringify({
                account: account,
                password: password
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((res) => {
            const data = res.data
            if (data.status === 'success') {
                const action = loginAction(data.data)
                dispatch(action)
            }
        })
    }
}
export const getLoginoutAction = () => ({
    type: LOGINOUT
})