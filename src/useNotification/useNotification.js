import { notification } from 'antd'

const useNotification = (text) => {
  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Error occured',
      description: text,
    })
  }
  return [contextHolder, openNotificationWithIcon]
}

export default useNotification
