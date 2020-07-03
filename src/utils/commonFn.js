/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-03 18:02:01
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 18:19:50
 * @Description: 
 */ 

/**
* [setCookie 设置cookie]
* [key value t 键 值 有效小时]
* cookie默认有效期1天
*/
function setCookie(key, value, hours = 24) {
  let exp = new Date();
  exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
  document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
/**
 * [getCookie 获取cookie]
 */
function getCookie(key) {
  const list = document.cookie.split("; ");//由于cookie是通过一个分号+空格的形式串联起来的，所以这里需要先按分号空格截断,变成[name=Jack,pwd=123456,age=22]数组类型；
  for (let i = 0; i < list.length; i++) {
    const arrCookie = list[i].split("=");//通过=截断，把name=Jack截断成[name,Jack]数组；
    if (arrCookie[0] === key) {
      return decodeURI(arrCookie[1]);
    }
  }
}

export { setCookie, getCookie }