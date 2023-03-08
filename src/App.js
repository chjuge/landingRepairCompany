import { Layout, theme } from 'antd';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header />
      <Content colorBgContainer={colorBgContainer}/>
      <Footer />
    </Layout>
  );
};
export default App;