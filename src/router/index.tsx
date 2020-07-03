/*
 * @Author: shiyuanyuan
 * @Date: 2020-06-29 16:35:10
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 19:26:27
 * @Description: 
 */ 
import React from "react";
import {
  HashRouter,
  Switch,
} from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import config from './route'; 

export default function Routers() {
  return (
    <HashRouter>
      <Switch> {renderRoutes(config)}</Switch>
    </HashRouter>
  );
}

