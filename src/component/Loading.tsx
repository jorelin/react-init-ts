import React from 'react';
import { Spin, Alert } from 'antd';
function Loading() {
  return (
    <div style={{width: '50%', height:'100%', paddingTop:'20%',margin: 'auto'}}>
      <Spin tip="Loading...">
        <Alert
          message="正在加载中..."
          description="请耐心等待，若页面长时间未反应，请刷新重试。"
          type="info"
        />
      </Spin>
    </div>
  );
}

export default Loading;