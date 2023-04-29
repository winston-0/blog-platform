import Article from '../Atricle/Article'

import useArticleListLogic from './useArticleListLogic'

const ArticleList = () => {
  const tickets = useArticleListLogic()
  let ticketsList = tickets ? tickets.articles : null
  if (ticketsList) {
    ticketsList = ticketsList.map((item) => {
      return (
        <li key={item.slug}>
          <Article data={item} />
        </li>
      )
    })
  }
  return <ul className="article-list">{ticketsList}</ul>
}

export default ArticleList
