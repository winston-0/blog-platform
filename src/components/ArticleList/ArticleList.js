import { Skeleton } from 'antd'

import Article from '../Atricle/Article'

import useArticleListLogic from './useArticleListLogic'

const ArticleList = () => {
  const tickets = useArticleListLogic()
  let ticketsList = tickets ? tickets.articles : []
  if (ticketsList.length > 0) {
    ticketsList = ticketsList.map((item) => {
      return (
        <li key={item.slug}>
          <Article data={item} />
        </li>
      )
    })
  } else if (ticketsList.length === 0) {
    for (let i = 0; i <= 10; i++) {
      ticketsList.push(
        <li key={i} className="article-list__skeleton">
          <Skeleton active title={false} paragraph={{ rows: 4, width: [910, 910, 910, 555] }} />
        </li>
      )
    }
  }
  return <ul className="article-list">{ticketsList}</ul>
}

export default ArticleList
