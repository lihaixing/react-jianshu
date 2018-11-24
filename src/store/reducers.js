// import {combineReducers} from 'redux'
import {combineReducers} from 'redux-immutable' //此时返回的事immutable对象
import HeaderReducer from '../common/header/store/reducers'
import HomeReducer from '../pages/home/store/reducers'
export default combineReducers({
    header:HeaderReducer,
    home:HomeReducer
})