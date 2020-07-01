/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 20:11:43
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 17:10:47
 * @Description: 
 */ 

import { combineReducers } from 'redux'
import counter from './state/counter'
import app from './state/app'

export default combineReducers({
  counter,
  app,
})
