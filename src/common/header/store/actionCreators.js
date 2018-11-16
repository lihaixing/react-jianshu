// 统一管理action
import {HANDLE_FOCUS, HANDLE_BLUR} from './actionTypes'

// import axios from 'axios'
// const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

export const getHandleFocusAtion = () => ({
    type: HANDLE_FOCUS
})
export const getHandleBlurAtion = () => ({
    type: HANDLE_BLUR
})

// 借助redux-thunk可以在action中写ajax，action返回的数据可以是函数
// export const getInitListAction = () => {
//     return (dispatch) => {
//         axios.get(apiUrl + '/api/todolist').then((res) => {
//             const action = initListAction(res.data)
//             dispatch(action)
//         })
//     }
// }