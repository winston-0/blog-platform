import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'

import { fetchEditArticle, fetchSingleArticle } from '../store/articlesSlice'

export const useEditArticle = (form) => {
  const match = useRouteMatch()
  const history = useHistory()
  const slug = match.params.slug
  let initialValues = null
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
  useEffect(() => {
    if (!oneArticle) {
      dispatch(fetchSingleArticle(match.params.slug))
    }
  }, [])
  useEffect(() => {
    if (oneArticle) {
      let { title, description, body, tagList } = oneArticle.article
      tagList = tagList.map((item) => {
        return { tag: item }
      })
      initialValues = { title, description, body, tagList }
      form.setFieldsValue(initialValues)
    }
  }, [oneArticle])
  return onFinish
}
