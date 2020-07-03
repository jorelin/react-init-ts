/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:44:35
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 21:03:59
 * @Description: 
 */
import Loadable from 'react-loadable';
import Loading from '../component/Loading'

const config = [
  { 
    name: 'login',
    path: "/", 
    exact: true, 
    auth: 'normal',
    component: Loadable({
      loader: () => import("../views/Login"),
      loading: Loading
    })
  },
  {
    name: 'home',
    path: '/home',
    auth: 'normal',
    component: Loadable({
      loader: () => import("../views/Home"),
      loading: Loading
    }),
    routes: [
      {
        path: "/home",
        exact: true, 
        component: Loadable({
          loader: () => import("../views/Home/GrandChild"),
          loading: Loading
        }),
      },
      {
        path: "/home/about",
        exact: true, 
        component: Loadable({
          loader: () => import("../views/About"),
          loading: Loading
        }),
      },
      {
        name: 'dashboard',
        path: '/home/dashboard',
        auth: 'admin',
        component: Loadable({
          loader: () => import("../views/Dashboard"),
          loading: Loading
        }),
      }
    ]
  },
  // TODO 404、403page
]

export default config;