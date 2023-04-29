import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearErrors } from '../store/profileSlice'
import useNotification from '../useNotification/useNotification'

export const useErrorLogic = (form) => {
  const dispatch = useDispatch()
  const [contextHolder, openNotificationWithIcon] = useNotification('invalid data')
  const error = useSelector((state) => state.profileData.error)
  const errorList = useSelector((state) => state.profileData.errorList)

  const setFieldsBody = (body) => {
    const result = []
    for (let i in body) {
      result.push({
        name: i,
        errors: [`${i} ${body[i]}`],
      })
    }
    return result
  }
  useEffect(() => {
    if (error) {
      form.setFields(setFieldsBody(errorList))
      openNotificationWithIcon('error')
    }
  }, [error])

  useEffect(() => {
    return () => dispatch(clearErrors())
  }, [])
  return contextHolder
}
