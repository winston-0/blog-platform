import Article from "../Atricle/Article"

const ArticleList = () => {
    const visibleArticles = [];
    for(let i = 0; i <= 6; i++) {
        const listItem = <li className="article-list__item">
            <Article key={i}/>
            </li>
    }
    return (
        <ul className="article-list">
            {visibleArticles}
        </ul>
    )
}

export default ArticleList