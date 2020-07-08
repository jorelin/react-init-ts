/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 17:10:24
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 15:52:15
 * @Description: 
 */
import createReducer from 'src/utils/createReduce.js';
import immutable from 'seamless-immutable';
import { appStateType } from 'src/types/app';
import { actionType } from 'src/types/commonType'; 
const initState: appStateType = {
  name: 'hi',
  token: '',
}
const INITIAL_STATE = immutable(initState)

export default createReducer(INITIAL_STATE, {
  'SAY_HI': (state = INITIAL_STATE, action: actionType<string, string>) => state.set('name', action.payload),
  'SET_TOKEN': (state = INITIAL_STATE, action: actionType<string, string>) => state.set('token', action.payload)
})