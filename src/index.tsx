/*
 * @Author: shiyuanyuan
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 15:25:07
 * @Description: 
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configStore from './redux/store';

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 模块热替换的 API
// 用的WebPack HMR中的NodeJS项目写的TypeScript。
// 但module.hot不可用：
// 需要安装@types/webpack-env
if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
