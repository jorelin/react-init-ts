/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-06 15:50:59
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 15:51:20
 * @Description: 
 */ 
export interface actionType<U, T> {
  type: U,
  payload?: T
}