import { useRouteMatch } from "react-router-dom"
import { favoriteArticleRequest, unFavoriteArticleRequest } from "../store/articlesSlice";
import { useDispatch } from "react-redux";
import {
    HeartOutlined,
    HeartFilled
  } from '@ant-design/icons';

const ArticleFavorite = ({isFavourite, slug}) => {
    const dispatch = useDispatch();
    const styleForUnFilled = { fontSize: '18px', lineHeight: '8px', cursor: 'pointer' }
    const styleForFilled = { fontSize: '18px', lineHeight: '8px', cursor: 'pointer', color: 'red' }
    const onFavorite = () => {
        dispatch(favoriteArticleRequest(slug))
    }
    const onUnFavorite = () => {
        dispatch(unFavoriteArticleRequest(slug))
    }
    if(!isFavourite) {
        return (
            <HeartOutlined onClick={onFavorite} style={styleForUnFilled}/>
        )
    } else if(isFavourite) {
        return (
            <HeartFilled onClick={onUnFavorite}  style={styleForFilled}/>
        )
    }
}

export default ArticleFavorite;