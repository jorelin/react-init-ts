/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-02 14:21:47
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 15:54:25
 * @Description: 
 */

import {
  call,
  put, 
  select,
  // takeEvery, 
  takeLatest,
} from 'redux-saga/effects'
import * as api from '../api/modules/app';
import { setCookie } from '../utils/commonFn';
import { countStateType } from '../types/count';

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
    const countData: countStateType= yield select(state => state.counter);
    yield put({ type: 'SAY_HI', payload: countData.num})
    
  } catch (e) { }
}
function* appSaga() {
  yield takeLatest("GET_LIST", fetchCrmList);
  yield takeLatest("LOGIN", login);
}

export default appSaga;