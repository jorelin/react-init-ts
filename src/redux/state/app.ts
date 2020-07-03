/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 17:10:24
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 16:53:33
 * @Description: 
 */
import createReducer from '../../utils/createReduce.js';
import immutable from 'seamless-immutable';
interface stateData {
  name: string,
  token: string,
}
const initState: stateData = {
  name: 'hi',
  token: '',
}
const INITIAL_STATE = immutable(initState)

export default createReducer(INITIAL_STATE, {
  'SAY_HI': (state = INITIAL_STATE, action: any) => state.set('name', action.payload),
  'SET_TOKEN': (state = INITIAL_STATE, action: any) => state.set('token', action.payload)
})