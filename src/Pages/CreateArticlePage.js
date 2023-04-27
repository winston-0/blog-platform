import ArticleForm from "../Form/ArticleForm"
import { useCreateArticle } from "../Form/useCreateArticle"

const CreateArticlePage = () => {
        return (
            <section className='form'>
            <h2 className='form-header'>Create new article</h2>
            <ArticleForm useLogic={useCreateArticle}/>
            </section>
        )
}

export default CreateArticlePage