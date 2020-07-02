/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 20:21:57
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-02 14:17:07
 * @Description: 
 */ 
import createReducer from '../../utils/createReduce.js';
import immutable from 'seamless-immutable';
interface actionType<U, T> {
  type: U,
  payload?: T
}
interface stateData {
  num: number,
}
const initState: stateData = {
  num: 0
}
const INITIAL_STATE = immutable(initState)
export default createReducer(INITIAL_STATE, {
  'ADD': (state = INITIAL_STATE) => state.update('num', (num) => ++num),
  'MINUS': (state = INITIAL_STATE) => state.update('num', (num) => --num),
})