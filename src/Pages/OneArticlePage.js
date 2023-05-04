import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Article from '../components/Atricle/Article'
import { fetchSingleArticle, clearCurrentArticle } from '../store/articlesSlice'

const OneArticlePage = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { slug } = params
  const singleArticle = useSelector((state) => state.articlesData.oneArticle)
  useEffect(() => {
    dispatch(fetchSingleArticle(slug))
  }, [slug])
  useEffect(() => {
    return () => dispatch(clearCurrentArticle())
  }, [])
  if (singleArticle) {
    return <Article type="singlePage" data={singleArticle.article}></Article>
  } else {
    return null
  }
}

export default OneArticlePage
