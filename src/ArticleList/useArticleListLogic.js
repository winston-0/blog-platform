import { fetchArticles } from "../store/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useArticleListLogic = () => {
    const dispatch = useDispatch()
    const page = useSelector(store => store.articlesData.page)
    const tickets = useSelector((store) => store.articlesData.data)
    useEffect(() => {
        dispatch(fetchArticles(page)) 
    }, [page])
    return tickets
}
export default useArticleListLogic