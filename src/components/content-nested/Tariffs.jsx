import { Col, Row } from "antd";
import { TARIFFS_HEADER, TARIFFS_INTRO_TEXT, tarif_prices } from "../../constants/constants";
import Tariff from "./tariff_card/Tariff";


const Tariffs = () => (
	 <Col span={24}>
		<h1>{TARIFFS_HEADER}</h1>
		<p>{TARIFFS_INTRO_TEXT}</p>
		<Row justify={"space-around"}>
			{tarif_prices.map(el => (
      <Col span={7}>
        <Tariff key={el.key} {...el} />
      </Col>))}
		</Row>
	</Col>
)

export default Tariffs;
