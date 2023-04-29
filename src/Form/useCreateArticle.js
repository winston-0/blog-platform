import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { requestCreateArticle } from '../store/articlesSlice'

export const useCreateArticle = (form) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onFinish = (value) => {
    const tagList = value.tagList.map((item) => {
      return item.tag
    })
    const body = JSON.stringify({ article: { ...value, tagList } })
    dispatch(requestCreateArticle(body)).then(() => history.push('/articles'))
  }
  const initialValues = {
    tagList: [
      {
        tag: null,
      },
    ],
  }
  form.setFieldsValue(initialValues)
  return onFinish
}
