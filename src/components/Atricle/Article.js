import { Card, Avatar, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import Markdown from 'markdown-to-jsx'
import format from 'date-fns/format'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Image from '../Image/Image'

import ArticleUserButtons from './ArticleUserButtons'
import ArticleFavorite from './ArticleFavorite'

const Article = ({ data, type = 'inList' }) => {
  const loading = useSelector((state) => state.articlesData.loading)
  const history = useHistory()
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const username = useSelector((state) => state.profileData.name)
  const onerror = (e) => {
    console.log(e)
  }
  const showTags = (tagList) => {
    if (tagList === null) {
      return null
    }
    return tagList.map((item, index) => {
      return (
        <div key={index} className="article__tag">
          <span>{item}</span>
        </div>
      )
    })
  }
  const cardClassName = type === 'singlePage' ? 'card card--singlePage' : 'card'
  const bodyContent = type === 'singlePage' ? <Markdown className="article__body">{data.body}</Markdown> : null

  return (
    <Card onError={(e) => onerror(e)} loading={loading ? true : false} className={cardClassName}>
      <div className="card__header">
        <div className="card-header-left">
          <Space align="baseline" direction="horizontal">
            <span onClick={() => history.push(`/articles/${data.slug}`)} className="card-header-title">
              {data.title}
            </span>
            <ArticleFavorite isFavourite={data.favorited} slug={data.slug} />
            <span className="favourite-count">{data.favoritesCount}</span>
          </Space>
          <Space size={8}>{showTags(data.tagList)}</Space>
        </div>
        <Meta
          avatar={<Avatar className="card-avatar" src={<Image url={data.author.image} />} />}
          title={data.author.username}
          description={format(new Date(data.createdAt), 'PP')}
        />
      </div>
      <Space align="center" style={type === 'singlePage' ? { marginTop: 10, justifyContent: 'space-between' } : null}>
        <span className="article__description">{data.description}</span>
        {type === 'singlePage' && loggedIn && data.author.username === username ? <ArticleUserButtons /> : null}
      </Space>
      {bodyContent}
    </Card>
  )
}
export default Article
