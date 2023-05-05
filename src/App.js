import Layout, { Content } from 'antd/es/layout/layout'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useEffect } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import store from './store'
import MainPage from './Pages/MainPage'
import OneArticlePage from './Pages/OneArticlePage'
import SignUpPage from './Pages/SignUpPage'
import SignInPage from './Pages/SignInPage'
import EditProfilePage from './Pages/EditProfilePage'
import { ThemeProvider } from './HOC/themeProvider'
import CreateArticlePage from './Pages/CreateArticlePage'
import EditArticlePage from './Pages/EditArticlePage'
import NotFoundPage from './Pages/NotFoundPage'
import { relogin } from './store/profileSlice'

function App() {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.dispatch(relogin())
    }
  }, [])

  const pathes = {
    home: '/',
    articles: '/articles/',
    singleArticle: '/articles/:slug',
    signIn: '/sign-in',
    signUp: '/sign-up',
    profile: '/profile',
    newArticle: '/new-article',
    editArticle: '/articles/:slug/edit',
  }
  return (
    <ConfigProvider>
      <Router>
        <Provider store={store}>
          <Layout className="app">
            <Header></Header>
            <Content className="blog-paltform-main">
              <Switch>
                <Route exact path={pathes.home}>
                  <MainPage />
                </Route>
                <Route exact path={pathes.articles}>
                  <MainPage />
                </Route>
                <Route exact path={pathes.singleArticle}>
                  <OneArticlePage />
                </Route>
                <Route path={pathes.signIn}>
                  <SignInPage />
                </Route>
                <Route path={pathes.signUp}>
                  <SignUpPage />
                </Route>
                <Route path={pathes.profile}>
                  <EditProfilePage />
                </Route>
                <Route path={pathes.profile}>
                  <CreateArticlePage />
                </Route>
                <Route path={pathes.editArticle}>
                  <EditArticlePage />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </Content>
            <Footer></Footer>
          </Layout>
        </Provider>
      </Router>
    </ConfigProvider>
  )
}

export default ThemeProvider(App)
