import { Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Examples from "./content-nested/Examples";
import FastWorking from "./content-nested/FastWorking";
import Intro from "./content-nested/Intro";
import Materials from "./content-nested/Materials";
import Tariffs from "./content-nested/Tariffs";
import WhyUs from "./content-nested/WhyUs";
import Contacts from "./content-nested/Contacts";

const AppContent = ({ colorBgContainer }) => {
  return <Content
    className="site-layout"
    style={{
      padding: '0 20vw',
    }}
  >
    <div
      style={{
        padding: 24,
        minHeight: 380,
        background: colorBgContainer,
      }}
    >
        <Row gutter={[16,24]}>
          <Intro />
          <WhyUs />
          <Tariffs />
          <Materials />
          <Examples />
          <Contacts />
          <FastWorking />
        </Row>
    </div>
  </Content>
}

export default AppContent;
