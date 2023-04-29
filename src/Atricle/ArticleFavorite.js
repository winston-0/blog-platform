import { useDispatch, useSelector } from 'react-redux'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

import { favoriteArticleRequest, unFavoriteArticleRequest } from '../store/articlesSlice'

const ArticleFavorite = ({ isFavourite, slug }) => {
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const dispatch = useDispatch()
  const styleForUnFilled = { fontSize: '18px', lineHeight: '8px', cursor: 'pointer' }
  const styleForFilled = { fontSize: '18px', lineHeight: '8px', cursor: 'pointer', color: 'red' }
  const onFavorite = () => {
    if (loggedIn) {
      dispatch(favoriteArticleRequest(slug))
    }
  }
  const onUnFavorite = () => {
    if (loggedIn) {
      dispatch(unFavoriteArticleRequest(slug))
    }
  }
  if (!isFavourite || !loggedIn) {
    return <HeartOutlined onClick={onFavorite} style={styleForUnFilled} />
  } else if (isFavourite && loggedIn) {
    return <HeartFilled onClick={onUnFavorite} style={styleForFilled} />
  }
}

export default ArticleFavorite
