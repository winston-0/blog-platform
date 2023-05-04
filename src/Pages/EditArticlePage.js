import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useRouteMatch } from 'react-router-dom'
import { Spin } from 'antd'
import { useEffect } from 'react'

import ArticleForm from '../components/Form/ArticleForm'
import { useEditArticle } from '../components/Form/useEditArticle'
import { fetchSingleArticle } from '../store/articlesSlice'

const EditArticlePage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const name = useSelector((state) => state.profileData.name)
  const oneArticle = useSelector((state) => state.articlesData.oneArticle)
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  useEffect(() => {
    if (!oneArticle) {
      dispatch(fetchSingleArticle(match.params.slug))
    }
  }, [])
  if (loggedIn && oneArticle) {
    if (oneArticle.article.author.username === name) {
      return (
        <section className="form">
          <h2 className="form-header">Edit Article</h2>
          <ArticleForm useLogic={useEditArticle} />
        </section>
      )
    } else {
      return <Redirect to="/" />
    }
  } else if (localStorage.getItem('token')) {
    return <Spin size="large" style={{ alignSelf: 'center' }}></Spin>
  } else {
    return <Redirect to="/" />
  }
}

export default EditArticlePage
