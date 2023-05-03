import Layout, { Content } from 'antd/es/layout/layout'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useEffect } from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
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

  return (
    <ConfigProvider>
      <Router>
        <Provider store={store}>
          <Layout className="app">
            <Header></Header>
            <Content className="blog-paltform-main">
              <Switch>
                <Route exact path="/">
                  <MainPage />
                </Route>
                <Route exact path="/articles/">
                  <MainPage />
                </Route>
                <Route exact path="/articles/:slug">
                  <OneArticlePage />
                </Route>
                <Route path="/sign-in">
                  <SignInPage />
                </Route>
                <Route path="/sign-up">
                  <SignUpPage />
                </Route>
                <Route path="/profile">
                  <EditProfilePage />
                </Route>
                <Route path="/new-article">
                  <CreateArticlePage />
                </Route>
                <Route path="/articles/:slug/edit">
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
