import React from 'react';
import {
  Link
} from "react-router-dom";
import { Alert } from 'antd';
function Forbidden() {
  return (
    <div style={{ width: '40%', height: '100%', paddingTop: '20%', margin: 'auto' }}>
      <Alert
        message="无权限"
        description="您好，您没有权限进入次页面"
        type="error"
      />
      <br/>
      <p><Link to={`/home`}>返回首页</Link></p>
    </div>
  );
}

export default Forbidden;


