import React from 'react'
import { Button, Divider, Form, Input, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'

import { requestToSignUp } from '../store/profileSlice'

import { useErrorLogic } from './useErrorLogic'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    const { username, email, password } = values
    const body = JSON.stringify({ user: { username, email, password } })
    dispatch(requestToSignUp(body))
  }
  const contextHolder = useErrorLogic(form)

  return (
    <React.Fragment>
      {contextHolder}
      <Form
        name="signUp"
        form={form}
        onFinish={onFinish}
        style={{ width: 320 }}
        layout="vertical"
        colon={false}
        requiredMark={false}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }, { whitespace: true }, { min: 3, max: 20 }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email address"
          rules={[{ type: 'email', message: 'not valid email' }, { required: true }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }, { min: 6, max: 40 }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="repeatPassword"
          label="Repeat Password"
          dependencies={['password']}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('Passwords does not match!')
              },
            }),
          ]}
        >
          <Input.Password placeholder="Repeat Password" />
        </Form.Item>
        <Divider style={{ marginBottom: 5, marginTop: 21 }}></Divider>
        <Form.Item valuePropName="checked" name="agreement" rules={[{ required: true }]}>
          <Checkbox>I agree to the processing of my personal information</Checkbox>
        </Form.Item>
        <Form.Item style={{ marginBottom: 8 }}>
          <Button type="primary" size="large" block htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default SignUpForm
