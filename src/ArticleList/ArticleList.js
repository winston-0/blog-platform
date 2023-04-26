import { useHistory } from "react-router";
import Article from "../Atricle/Article";

import useArticleListLogic from "./useArticleListLogic";

const ArticleList = () => {
    const tickets = useArticleListLogic();
    let ticketsList = tickets ? tickets.articles : null
    const history = useHistory()
    const onClick = (slug) => {
        history.push(`/articles/${slug}`)
    }
    if(ticketsList) {
      ticketsList = ticketsList.map(item => {
            return <li onClick={() => onClick(item.slug)} key={item.slug}><Article data={item}/></li>
        })
    }
    return (
        <ul className="article-list">
            {ticketsList}
        </ul>
    )
}

export default ArticleList