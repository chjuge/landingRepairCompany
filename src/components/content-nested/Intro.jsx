import { CONTACT_NUMBER, INTRO_MAIN_HEADER, INTRO_SECONDARY_HEADER, INTRO_TEXT } from "../../constants/constants";
import { PhoneTwoTone } from '@ant-design/icons';
import { Col } from "antd";

const Intro = () => (
  <Col span={24}>
    <h1>{INTRO_MAIN_HEADER}</h1>
    <h3>{INTRO_SECONDARY_HEADER}</h3>
    <a href={`tel:${CONTACT_NUMBER}`}>
      {INTRO_TEXT}
      <PhoneTwoTone />
    </a>
  </Col>
)

export default Intro;
