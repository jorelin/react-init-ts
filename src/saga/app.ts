/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-02 14:21:47
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-02 14:31:04
 * @Description: 
 */

import {
  call,
  // put, 
  // takeEvery, 
  takeLatest,
  put
} from 'redux-saga/effects'
import * as api from '../api/modules/app';

interface actionType<U, T> {
  type: U,
  payload?: T
}

function* fetchUser(action: actionType<string, string>) {
  try {
    const data = yield call(api.apiGetCrm);
    yield put({ type: 'SAY_HI', payload: data.message })
  } catch (e) { }
}
function* appSaga() {
  yield takeLatest("GET_LIST", fetchUser);
}

export default appSaga;