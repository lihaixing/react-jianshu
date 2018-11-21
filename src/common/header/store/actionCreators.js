// 统一管理action
import {HANDLE_FOCUS, HANDLE_BLUR, INIT_LIST, Hot_Switch, HANDLE_MOUSE_ENTER,HANDLE_MOUSE_OVER} from './actionTypes'
import {fromJS} from 'immutable'

import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

export const getHandleFocusAtion = () => ({
    type: HANDLE_FOCUS
})
export const getHandleBlurAtion = () => ({
    type: HANDLE_BLUR
})

export const initListAction = (list) => ({
    type: INIT_LIST,
    list: fromJS(list)
})

export const getHotSwitchAction = () => ({
    type: Hot_Switch
})

export const getMouseEnterAction = () => ({
    type: HANDLE_MOUSE_ENTER
})
export const getMouseOverAction = () => ({
    type: HANDLE_MOUSE_OVER
})

// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
export const getListActon = () => {
    return (dispatch) => {
        axios.get(apiUrl + '/api/list').then((res) => {
            const action = initListAction(res.data)
            dispatch(action)
        })
    }
}