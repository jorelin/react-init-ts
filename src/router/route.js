/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:44:35
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-06-29 19:31:42
 * @Description: 
 */
import Loadable from 'react-loadable';
import Loading from '../component/Loading'
const config = [
  { 
    path: "/", 
    exact: true, 
    auth: 'normal',
    component: Loadable({
      loader: () => import("../views/Home"),
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
        path: "/home/child",
        component: Loadable({
          loader: () => import("../views/Home/GrandChild"),
          loading: Loading
        }),
      }
    ]
  },
  {
    name: 'about',
    auth: 'normal',
    path: '/about',
    component: Loadable({
      loader: () => import("../views/About"),
      loading: Loading
    }),
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    auth: 'admin',
    component: Loadable({
      loader: () => import("../views/Dashboard"),
      loading: Loading
    }),
  }
]

export default config;