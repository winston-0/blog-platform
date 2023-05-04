import React from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { requestToUpdateUser } from '../../store/profileSlice'

import { useErrorLogic } from './useErrorLogic'

const EditProfileForm = () => {
  const dispatch = useDispatch()

  const { email, name, profileImage } = useSelector((state) => state.profileData)
  const [form] = Form.useForm()
  const onFinish = (values) => {
    const { username, email, password, image } = values
    const body = JSON.stringify({ user: { username, email, password, image } })
    dispatch(requestToUpdateUser(body))
  }
  const contextHolder = useErrorLogic(form)

  return (
    <React.Fragment>
      {contextHolder}
      <Form
        name="editProfile"
        form={form}
        onFinish={onFinish}
        style={{ width: 320 }}
        layout="vertical"
        colon={false}
        requiredMark={false}
      >
        <Form.Item
          initialValue={name}
          name="username"
          label="Username"
          rules={[{ whitespace: true }, { min: 3, max: 20 }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          initialValue={email}
          name="email"
          label="Email address"
          rules={[{ type: 'email', message: 'not valid email' }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>
        <Form.Item name="password" label="New password" rules={[{ min: 6, max: 40 }]}>
          <Input.Password placeholder="New password" />
        </Form.Item>
        <Form.Item
          initialValue={profileImage}
          name="image"
          label="Avatar image (url)"
          rules={[{ type: 'url', message: 'not a valid link' }]}
        >
          <Input placeholder="Avatar image"></Input>
        </Form.Item>

        <Form.Item style={{ marginBottom: 8 }}>
          <Button type="primary" size="large" block htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}

export default EditProfileForm
