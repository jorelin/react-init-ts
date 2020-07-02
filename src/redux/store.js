/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 19:56:48
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-02 14:47:44
 * @Description: 
 */ 

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '.'
import rootSagas from '../saga'
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  sagaMiddleware,
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore() {
  const store = createStore(rootReducer, enhancer);
  // then run the saga
  sagaMiddleware.run(rootSagas)
  return store
}
