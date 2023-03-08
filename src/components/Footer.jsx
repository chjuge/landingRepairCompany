import { Layout } from 'antd';
import { FOOTER_TEXT } from '../constants/constants';

const { Footer } = Layout;

const AppFooter = () => {
  return <Footer
    style={{
      textAlign: 'center',
    }}
  >
    {FOOTER_TEXT}
  </Footer>
}

export default AppFooter;