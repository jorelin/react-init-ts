/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-02 14:21:47
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-02 15:43:38
 * @Description: 
 */ 

import { all } from 'redux-saga/effects';
import appSaga from './app';

export default function* rootSagas() {
  // yield all参数为数组，可以传多个saga模块
  yield all([appSaga()]);
}
