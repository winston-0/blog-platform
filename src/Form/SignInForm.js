import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { login, clearErrors } from '../store/profileSlice'
import useNotification from '../useNotification/useNotification'

const SignInForm = () => {
  const [contextHolder, openNotificationWithIcon] = useNotification('email or password is invalid')
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const onFinish = (values) => {
    const { email, password } = values
    const body = JSON.stringify({ user: { email, password } })
    dispatch(login(body))
  }
  const error = useSelector((state) => state.profileData.error)
  useEffect(() => {
    if (error) {
      form.setFields([
        {
          name: 'email',
          errors: [''],
        },
        {
          name: 'password',
          errors: [''],
        },
      ])
      openNotificationWithIcon('error')
    }
  }, [error])
  useEffect(() => {
    return () => dispatch(clearErrors())
  }, [])
  return (
    <React.Fragment>
      {contextHolder}
      <Form
        name="signIn"
        form={form}
        onFinish={onFinish}
        style={{ width: 320 }}
        layout="vertical"
        colon={false}
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label="Email address"
          rules={[{ type: 'email', message: 'not valid email' }, { required: true }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default SignInForm
