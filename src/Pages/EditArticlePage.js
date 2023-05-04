import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Spin } from 'antd'

import ArticleForm from '../Form/ArticleForm'
import { useEditArticle } from '../Form/useEditArticle'
import BlurSpinner from '../BlurSpinner/BlurSpinner'

const EditArticlePage = () => {
  const loading = useSelector((state) => state.articlesData.loading)
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  if (loggedIn) {
    return (
      <section className="form">
        <h2 className="form-header">Edit Article</h2>
        <ArticleForm useLogic={useEditArticle} />
        {loading ? <BlurSpinner /> : null}
      </section>
    )
  } else if (localStorage.getItem('token')) {
    return <Spin size="large" style={{ alignSelf: 'center' }}></Spin>
  } else {
    return <Redirect to="/sign-in" />
  }
}

export default EditArticlePage
