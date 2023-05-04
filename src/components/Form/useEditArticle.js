import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

import { fetchEditArticle } from '../../store/articlesSlice'

export const useEditArticle = (form) => {
  const match = useRouteMatch()
  const history = useHistory()
  const slug = match.params.slug

  let onFinish = (value) => {
    let { tagList } = value
    tagList = tagList.map((item) => {
      return item.tag
    })
    const body = JSON.stringify({ article: { ...value, tagList } })
    const payload = { body, slug }
    dispatch(fetchEditArticle(payload))
    history.push('/articles')
  }
  const dispatch = useDispatch()

  const oneArticle = useSelector((state) => state.articlesData.oneArticle)

  let { title, description, body, tagList } = oneArticle.article
  tagList = tagList.map((item) => {
    return { tag: item }
  })
  const initialValues = { title, description, body, tagList }
  form.setFieldsValue(initialValues)

  return onFinish
}
