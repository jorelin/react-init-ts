/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:39:12
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-01 18:54:06
 * @Description: 
 */ 
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import * as api from '../../api/modules/app';
import { DatePicker } from 'antd';
import { concat } from 'lodash';
// 定义ts接口，props数据类型检测
interface HomeData {
  propData: string,
  counter: {
    num: number
  },
  app: {
    name: string
  },
  route: any,
  dispatch: ({ type, payload }: { type: string, payload?: any }) => void;
}

const Home = (props: HomeData) => {
  const { counter, app, dispatch } = props;
  // 使用lodash
  const arr = concat(1, 2)
  // redux - counter - ADD/MINUS
  const changeNum = async (action: string) => {
    await api.apiGetCrm();
    dispatch({
      type: action
    })
  }
  
  // redux - app - SAY_HI
  const sayHi = () => {
    dispatch({
      type: 'SAY_HI',
      payload: 'hello , react !'
    })
  }
  return (
    <div>
      <h2>Home</h2>
      {counter.num}<br/>
      <button className='add_btn' onClick={() => changeNum('ADD')}>+</button>
      <button className='add_btn' onClick={() => changeNum('MINUS')}>-</button>
      <br/>
      {arr}
      <p>{app.name}</p>
      <button className='add_btn' onClick={sayHi}>say hi ！</button>
      <br/>
      <DatePicker/>
      {/* home路由下的子路由 */}
      {renderRoutes(props.route.routes)}
    </div>
  );
}
// 获取redux-store中的某一个或多个状态库模块
const mapStateToProps = (state:any) => {
  return {
    counter: state.counter,
    app: state.app,
    // ... 继续添加其他state模块
  }
}
export default connect(mapStateToProps)(Home);