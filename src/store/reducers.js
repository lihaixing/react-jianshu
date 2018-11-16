import {combineReducers} from 'redux'
import HeaderReducer from '../common/header/store/reducers'
export default combineReducers({
    header:HeaderReducer
})