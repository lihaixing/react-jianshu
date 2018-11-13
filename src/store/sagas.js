import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import {initListAction} from "./actionCreators";
import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

function* getInitLIst() {
    const res = yield axios.get(apiUrl + '/api/todolist')
    const action = initListAction(res.data)
    yield put(action)
}

export default function* sagas() {
    yield takeEvery(GET_INIT_LIST, getInitLIst)
}