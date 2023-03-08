import { fastWorkingPros } from "../../constants/constants";
import { Card, Col, Row } from 'antd';

const FastWorking = () => (
	<Row>
		<Col span={5}>
			{fastWorkingPros.map(({ key, header, icon, description }) => <Card key={key} title={
				<span>
					{icon}
					<h4>{header}</h4>
				</span>
			}
			>
				<p>{description}</p>
			</Card>)}
		</Col>
	</Row>
);

export default FastWorking;