/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 11:31:13
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 11:45:33
 * @Description: 
 */ 

import { 
  get, 
  // post, 
  // del 
} from '../axios';
import config from '../config';

const baseUrl = config.baseUrl;
// 获取crm
export const apiGetCrm = () => get(`${baseUrl}promote/code/angency`);

