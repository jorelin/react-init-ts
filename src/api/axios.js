/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 11:24:51
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 17:01:49
 * @Description: 
 */ 

import axios from 'axios';
import { message } from 'antd';
import { getCookie } from '../utils/commonFn';
axios.defaults.timeout = 30000
const instance = axios.create();
instance.interceptors.request.use(config => {
  config.headers = {
    "Authorization": getCookie('token')
  }
  return config
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  const { code } = response.data;
  switch (code) {
    case "0":
      break;
    case 0:
      break;
    case 200:
      break;
    case '401':
      message.error('认证信息未通过，请重新登录');
      window.location.hash = '#/'
      break;
    case '406': {
      message.warning(response.data.message);
      window.location.hash = '#/'
      break
    }
    default:
      message.error(response.data.message);
  }
  return response.data

},
  error => {
    const { response } = error
    if (response) {
      // 处理错误...
      switch (response.status) {
        case 401: {
          message.error(response.status + ':' + response.data.message)
          break
        }
        case 500: {
          message.error(response.status + ':' + response.data.message)
          break
        }
        default: {
          message.error(response.status + ':' + response.data.message)
        }
      }
    }
    return Promise.reject(error.response.data);
  });


export const post = (url, data, config = {
  headers: {
    'Content-Type': 'application/json',
  },
}) => {
  return instance.post(url, data, config);
};

export const del = (url, params, config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params
}) => {
  return instance.delete(url, config);
};

export const get = (url, params, config = {
  headers: {
    'Content-Type': 'application/json',
  },
}) => {
  return instance.get(url, { params }, config);
};

