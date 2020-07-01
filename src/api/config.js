/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-01 11:34:37
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 11:44:47
 * @Description: 
 */ 

const status = process.env.NODE_ENV;
const config = {
  'development': {
    baseUrl: 'https://xue.offcn.com/'
  },
  'production': {
    baseUrl: 'https://xue.offcn.com/'
  },
  'test': {
    baseUrl: 'https://xue.offcn.com/'
  }
}
export default config[status];