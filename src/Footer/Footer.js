import { Pagination } from 'antd'
import { Footer as FooterAntd } from 'antd/es/layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { changePage } from '../store/articlesSlice'

const Footer = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const articlesData = useSelector((state) => state.articlesData.data)
  const currentPage = useSelector((state) => state.articlesData.page)
  if (location.pathname === '/' || location.pathname === '/articles') {
    return (
      <FooterAntd className="footer">
        {articlesData !== null ? (
          <Pagination
            onChange={(currentPage) => {
              dispatch(changePage(currentPage))
              window.scrollTo(0, 0)
            }}
            showSizeChanger={false}
            defaultCurrent={currentPage}
            total={Math.floor(articlesData.articlesCount / 10) + '0'}
          ></Pagination>
        ) : null}
      </FooterAntd>
    )
  }
}

export default Footer
