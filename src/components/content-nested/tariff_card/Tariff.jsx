import { Card } from 'antd';

const { Meta } = Card;

const Tariff = ({ value, title, price, src }) => {
	return <Card 
		cover={
			<img
				alt='example'
				src={src}
			/>
		}
	>
		<Meta
			title={title}
			description={price}
		/>
		{<ul>
			{value.map(el => <li>{el}</li>)}
		</ul>}
	</Card>
};

export default Tariff;
