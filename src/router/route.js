/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:44:35
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-06 16:17:43
 * @Description: 
 */
import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../component/Loading'
import NotFound from '../component/NotFound'
import Forbidden from '../component/Forbidden'
import { Redirect } from 'react-router';
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
    path: '/404',
    component: NotFound
  },
  {
    path: '/403',
    component: Forbidden
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
          loader: () => import("../views/Home/Child"),
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
    ],
  },
  {
    path: '*',
    component: () => <Redirect to="/404" />
  }
]

export default config;