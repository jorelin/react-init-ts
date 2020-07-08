/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 20:21:57
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 15:59:03
 * @Description: 
 */ 
import createReducer from 'src/utils/createReduce.js';
import immutable from 'seamless-immutable';
import { countStateType } from 'src/types/count';
// import { actionType } from 'src/types/commonType'; 
const initState: countStateType = {
  num: 0
}
const INITIAL_STATE = immutable(initState)

export default createReducer(INITIAL_STATE, {
  'ADD': (state = INITIAL_STATE, action: any) => state.update('num', (num) => ++num),
  'MINUS': (state = INITIAL_STATE, action: any) => state.update('num', (num) => --num),
})
