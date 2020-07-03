/*
 * @Author: shiyuanyuan
 * @Date: 2020-07-02 16:04:09
 * @LastEditors: shiyuanyuan
 * @LastEditTime: 2020-07-03 20:04:51
 * @Description: 
 */ 
/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { getCookie } from '../../utils/commonFn';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    string: '${label} is not a validate string!',
  },
};
interface actionType<U, T> {
  type: U,
  payload?: T,
  callback?: () => void
}
interface loginData {
  history: any,
  dispatch: <U, T>({ type, payload }: actionType<U, T>) => void;
}
function Login(props: loginData) {
  useEffect(() => {
    // token在有效期，默认跳转首页
    if (getCookie('token')) props.history.push('/home')
  }, [props.history])
  const { dispatch } = props
  const submit = (value: Store) => {
    dispatch({ type: 'LOGIN', payload: value, callback: () => props.history.push('/home') })
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center', paddingTop: '20%' }}>Login  <span style={{fontSize:'12px'}}>(仅mis账号登陆)</span></h2>
      <Form {...layout} name="login" validateMessages={validateMessages} onFinish={submit}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      
    </div>
  );
}

export default connect()(Login);