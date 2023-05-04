import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ArticleForm from '../Form/ArticleForm'
import { useCreateArticle } from '../Form/useCreateArticle'
import BlurSpinner from '../BlurSpinner/BlurSpinner'

const CreateArticlePage = () => {
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const loading = useSelector((state) => state.profileData.loading)
  console.log(loading)
  if (loggedIn) {
    return (
      <section className="form">
        <h2 className="form-header">Create new article</h2>
        <ArticleForm useLogic={useCreateArticle} />
        {loading ? <BlurSpinner /> : null}
      </section>
    )
  } else {
    return <Redirect to="/sign-in" />
  }
}

export default CreateArticlePage
