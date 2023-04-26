import Layout, { Content } from "antd/es/layout/layout";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./Pages/MainPage";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import OneArticlePage from "./Pages/OneArticlePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import EditProfilePage from "./Pages/EditProfilePage";
import { ConfigProvider } from "antd";
import { themeProvider } from "./HOC/themeProvider";
import CreateArticlePage from "./Pages/CreateArticlePage";
import EditArticlePage from "./Pages/EditArticlePage";

function App() {
  return (
    <ConfigProvider>
    <Router>
    <Provider store={store}>
    <Layout className="app">
      <Header></Header>
      <Content className="blog-paltform-main"> 
        <Route exact path='/'>
          <MainPage/>
        </Route>
        <Route exact path='/articles/'>
          <MainPage/>
        </Route>
        <Route exact path='/articles/:slug'>
          <OneArticlePage/>
        </Route>
        <Route path='/sign-in'>
          <SignInPage/>
        </Route>
        <Route path='/sign-up'>
          <SignUpPage/>
        </Route>
        <Route path='/profile'>
          <EditProfilePage/>
        </Route>
        <Route path='/new-article'>
          <CreateArticlePage/>
        </Route>
        <Route path='/articles/:slug/edit'>
          <EditArticlePage/>
        </Route>
        </Content>
      <Footer></Footer>
    </Layout>
    </Provider>
    </Router>
    </ConfigProvider>
  );
}

export default themeProvider(App);
