import { CONTACT_EMAIL, whyUsList, WHY_US_HEADER, WHY_US_TEXT } from "../../constants/constants";
import { MailTwoTone } from '@ant-design/icons';
import { Col } from "antd";

const WhyUs = () => (
	<Col span={24}>
		<h1>{WHY_US_HEADER}</h1>
		<ul>
      {whyUsList.map((el, key = 0) => <li key={(++key).toString()}>{el}</li>)}
    </ul>
    <a href={`mailto:${CONTACT_EMAIL}`}>
      {WHY_US_TEXT}
      <MailTwoTone />
    </a>
	</Col>
)

export default WhyUs;
