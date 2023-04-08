import { Col } from "antd";
import { MATERIALS_HEADER, MATERIALS_TEXT } from "../../constants/constants";

const Materials = () => (
  <Col span={24}>
		<h1>{MATERIALS_HEADER}</h1>
		<p>{MATERIALS_TEXT}</p>
	</Col>
);

export default Materials;
