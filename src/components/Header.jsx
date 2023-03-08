import { Layout, Menu } from 'antd';
import { navs } from '../constants/constants';

const { Header } = Layout;

const AppHeader = () => {
	return <Header
		style={{
			position: 'sticky',
			top: 0,
			zIndex: 1,
			width: '100%',
		}}
	>
		<div
			style={{
				float: 'left',
				width: 120,
				height: 31,
				margin: '16px 24px 16px 0',
				background: 'rgba(255, 255, 255, 0.2)',
			}}
		/>
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={['1']}
			items={navs.map(({ key, label }) => ({
				key,
				label,
			}))}
		/>
	</Header>
}

export default AppHeader;
