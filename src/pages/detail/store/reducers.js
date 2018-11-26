import {INIT_DETAIL} from './actionTypes'
import {fromJS} from 'immutable'
// 变为immutable对象，可以改变值
const defaultState = fromJS({
    detail:{
        title:'',
        content:''
    }
})
// 不纯函数：返回 new Date()
export default (state = defaultState, action) => {
    switch (action.type) {
        case INIT_DETAIL:
            return state.set('detail',action.data)
        default:
            return state
    }
}