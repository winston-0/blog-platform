import { Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { logOut } from '../store/profileSlice'

import avatarPlaceholder from './Rectangle 1.png'

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const name = useSelector((state) => state.profileData.name)
  const tockenExist = localStorage.getItem('token')
  const profileImage = useSelector((state) => state.profileData.profileImage)

  const onLogOut = () => {
    localStorage.removeItem('token')
    dispatch(logOut())
  }
  const onProfile = () => {
    history.push('/profile')
  }
  const unAuthoriseInterface = (
    <div className="header__unAuthorised">
      <Link to="/sign-in" className="header__signIn">
        Sign In
      </Link>
      <Link to="/sign-up" className="header__signUp">
        Sign Up
      </Link>
    </div>
  )
  const authorisedInterface = loggedIn ? (
    <div className="header__authorised">
      <Link to="/new-article" className="header__createArticle">
        Create article
      </Link>
      <div onClick={onProfile} className="header__profile-info">
        <span className="header__profile-name">{name}</span>
        <Avatar src={profileImage || avatarPlaceholder} size={46} />
      </div>
      <a onClick={onLogOut} className="header__logOut">
        Log Out
      </a>
    </div>
  ) : null
  return (
    <header className="header">
      <Link className="header__logo" to={'/'}>
        Realworld Blog
      </Link>
      {loggedIn || tockenExist ? authorisedInterface : unAuthoriseInterface}
    </header>
  )
}
export default Header
