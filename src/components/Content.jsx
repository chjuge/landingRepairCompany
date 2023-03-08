import { Content } from "antd/es/layout/layout";
import Examples from "./content-nested/Examples";
import FastWorking from "./content-nested/FastWorking";
import Intro from "./content-nested/Intro";
import Materials from "./content-nested/Material";
import Tariffs from "./content-nested/Tariffs";
import WhyUs from "./content-nested/WhyUs";

const AppContent = ({ colorBgContainer }) => {
	return <Content
		className="site-layout"
		style={{
			padding: '0 50px',
		}}
	>
		<div
			style={{
				padding: 24,
				minHeight: 380,
				background: colorBgContainer,
			}}
		>
			<Intro />
			<br />
			<WhyUs />
			<br />
			<Tariffs />
			<br />
			<Materials />
			<br />
      <Examples />
      <br />
      <FastWorking />
      <br />
		</div>
	</Content>
}

export default AppContent;