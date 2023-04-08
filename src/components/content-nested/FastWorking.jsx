import { fastWorkingPros } from "../../constants/constants";
import { Card, Col, Row } from 'antd';

const FastWorking = () => (
	<Col span={24}>
		<Row justify={"space-around"}>
		  {fastWorkingPros.map(({ key, header, icon, description }) => 
    	 (
    	  <Col span={7}>
    	    <Card key={key} title={
		  			<div>
  						{icon}
  						<h4>{header}</h4>
		  			</div>
		   		}>
		  		<p>{description}</p>
		  	  </Card>
    	  </Col>
    	))}
		</Row>
	</Col>
);

export default FastWorking;
