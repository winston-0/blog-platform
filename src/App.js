import Layout, { Content } from "antd/es/layout/layout";
import ArticleList from "./ArticleList/ArticleList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <ArticleList/>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
