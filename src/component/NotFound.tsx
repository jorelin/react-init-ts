import React from 'react';
import {
  Link
} from "react-router-dom";
import { Alert } from 'antd';
function NotFound() {
  return (
    <div style={{ width: '40%', height: '100%', paddingTop: '20%', margin: 'auto' }}>
      <Alert
        message="未找到相关页面"
        description="请检查并输入正确的地址！"
        type="error"
      />
      <br />
      <p><Link to={`/home`}>返回首页</Link></p>
    </div>
  );
}

export default NotFound;


