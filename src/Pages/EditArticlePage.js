import ArticleForm from "../Form/ArticleForm"
import { useEditArticle } from "../Form/useEditArticle"
import BlurSpinner from "../BlurSpinner/BlurSpinner"
import { useSelector } from "react-redux"

const EditArticlePage = () => {
    const loading = useSelector(state => state.articlesData.loading);
        return (
            <section className='form'>
            <h2 className='form-header'>Edit Article</h2>
            <ArticleForm useLogic={useEditArticle}/>
            {loading ? <BlurSpinner/> : null}
            </section>
        )
}

export default EditArticlePage