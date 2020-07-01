/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 17:10:24
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 18:17:01
 * @Description: 
 */ 
import createReducer from '../../utils/createReduce.js';
import { SAY_HI } from '../constant'
import immutable from 'seamless-immutable';
interface actionType<U, T> {
  type: U,
  payload?: T
}
interface stateData {
  name: string,
}
const initState: stateData = {
  name: 'hi'
}
const INITIAL_STATE = immutable(initState)
export default createReducer(INITIAL_STATE, {
  [SAY_HI]: (state = INITIAL_STATE, action: actionType<string, string> ) => {
    const { payload } = action;
    return state.set('name', payload)
  }
})