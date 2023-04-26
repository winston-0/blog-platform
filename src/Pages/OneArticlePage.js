import React, { useEffect } from "react";
import Article from "../Atricle/Article"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../store/articlesSlice";

const OneArticlePage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {slug} = params
    const singleArticle = useSelector(state => state.articlesData.oneArticle)
    // const [loading, setLoading] = useState();
    useEffect(() => {
        dispatch(fetchSingleArticle(slug))
    }, [slug])
    if(singleArticle) {
        return <Article type="singlePage" data={singleArticle.article}></Article>
    } else {
        return null
    }
}

export default OneArticlePage