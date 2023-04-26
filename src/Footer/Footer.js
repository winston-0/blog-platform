import { Pagination } from "antd"
import { Footer as FooterAntd } from "antd/es/layout/layout"
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store/articlesSlice";
import { useLocation } from "react-router";


const Footer = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const articlesData = useSelector(state => state.articlesData.data);
    if(location.pathname === '/') {
        return (
            <FooterAntd className="footer">
                { articlesData !== null ?
                <Pagination
                    onChange={(currentPage) => {
                        dispatch(changePage(currentPage))
                        window.scrollTo(0, 0)
                    }}
                    showSizeChanger={false} 
                    defaultCurrent={1}
                    total={Math.floor(articlesData.articlesCount / 10) + '0'}>
                </Pagination>
                : null}
            </FooterAntd>
        )
    }
}

export default Footer