/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 20:21:57
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 13:41:00
 * @Description: 
 */ 
import createReducer from '../../utils/createReduce.js';
import immutable from 'seamless-immutable';
interface stateData {
  num: number,
}
const initState: stateData = {
  num: 0
}
const INITIAL_STATE = immutable(initState)

export default createReducer(INITIAL_STATE, {
  'ADD': (state = INITIAL_STATE, action: any) => state.update('num', (num) => ++num),
  'MINUS': (state = INITIAL_STATE, action: any) => state.update('num', (num) => --num),
})
