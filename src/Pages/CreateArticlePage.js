import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ArticleForm from '../Form/ArticleForm'
import { useCreateArticle } from '../Form/useCreateArticle'

const CreateArticlePage = () => {
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const loading = useSelector((state) => state.profileData.loading)
  if (loggedIn || loading) {
    return (
      <section className="form">
        <h2 className="form-header">Create new article</h2>
        <ArticleForm useLogic={useCreateArticle} />
      </section>
    )
  } else {
    return <Redirect to="/sign-in" />
  }
}

export default CreateArticlePage
