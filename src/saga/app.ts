/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-02 14:21:47
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 19:57:27
 * @Description: 
 */

import {
  call,
  put, 
  // takeEvery, 
  takeLatest,
} from 'redux-saga/effects'
import * as api from '../api/modules/app';
import { setCookie } from '../utils/commonFn'

function* login(action: any) {
  try{
    const { value } = yield call(api.apiLogin, action.payload);
    // save token
    yield put({ type: 'SET_TOKEN', payload: value})
    setCookie('token', value)
    // 跳转首页
    action.callback();
  }catch(e) { }
}
function* fetchCrmList(action:any) {
  try {
    const data = yield call(api.apiGetCrm);
    console.log(data)
    yield put({ type: 'SAY_HI', payload: 90000 })
    
  } catch (e) { }
}
function* appSaga() {
  yield takeLatest("GET_LIST", fetchCrmList);
  yield takeLatest("LOGIN", login);
}

export default appSaga;