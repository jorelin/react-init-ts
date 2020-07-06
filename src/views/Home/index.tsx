/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:39:12
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 16:30:32
 * @Description: 
 */
import React, { useState, useEffect} from 'react';
import { renderRoutes } from 'react-router-config';
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
// 定义ts接口，props数据类型检测
interface actionType<U, T> {
  type: U,
  payload?: T
}
interface HomeData {
  propData: string,
  counter: {
    num: number
  },
  app: {
    name: string
  },
  history: any,
  route: any,
  dispatch: <U, T>({ type, payload }: actionType<U, T>) => void;
}
const Home = (props: HomeData) => {
  const [pagePath, setPagePath] = useState('')
  useEffect(() => {
    window.onhashchange = () => getPath();
    getPath();
  },[])
  const getPath = () => {
    const hash = window.location.hash.split('#')
    const currentPagePath = hash[1];
    const matchPath = props.route.routes.some((v: any) => v.path === currentPagePath)
    if (!matchPath && currentPagePath.split('/')[1] === 'home'){
      props.history.push('/home')
    }else{
      setPagePath(currentPagePath)
    }
  }
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" style={{ height: '100vh' }} theme="light" >
        <div className="logo" style={{ height: '64px' }}></div>
        <Menu theme="light" mode="inline" selectedKeys={[pagePath]}>
          <Menu.Item key="/home" icon={<UserOutlined />}>
            <Link to={`/home`}>init</Link>
          </Menu.Item>
          <Menu.Item key="/home/about" icon={<UserOutlined />}>
            <Link to={`/home/about`}>about</Link>
          </Menu.Item>
          <Menu.Item key="/home/dashboard" icon={<VideoCameraOutlined />}>
            <Link to={`/home/dashboard`}>dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/home/auth" icon={<VideoCameraOutlined />}>
            <Link to={`/403`}>auth</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}/>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderRoutes(props.route.routes)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by shiyuanyuan</Footer>
      </Layout>
    </Layout>
  );
}
// 获取redux-store中的某一个或多个状态库模块
const mapStateToProps = (state: any) => {
  return {
    counter: state.counter,
    app: state.app,
    // ... 继续添加其他state模块
  }
}
export default connect(mapStateToProps)(Home);