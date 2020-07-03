/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 11:31:13
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-02 17:34:15
 * @Description: 
 */ 

import { 
  get, post, 
  // post, 
  // del 
} from '../axios';
import config from '../config';

const baseUrl = config.baseUrl;

// login
export const apiLogin = (params: any) => post(`${baseUrl}promote/auth/login`, params)
// 获取crm
export const apiGetCrm = () => get(`${baseUrl}promote/code/angency`);

