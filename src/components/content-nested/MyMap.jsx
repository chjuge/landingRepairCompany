import { Col } from "antd";

const MyMap = () => (
  <Col span={24} className="my-map-container">
	  <a className="my-map-yandex-link"
  	   href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" >
	  </a>
	  <a className="my-map-yandex-link-address"
	    href="https://yandex.ru/maps/213/moscow/house/bolshoy_spasoglinishchevskiy_pereulok_10/Z04YcARlSEwAQFtvfXt0dHhjZw==/?ll=37.635325%2C55.755376&utm_medium=mapframe&utm_source=maps&z=19.69">
  	</a>
  	<iframe src="https://yandex.ru/map-widget/v1/?ll=37.635325%2C55.755376&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNjM1ORJi0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCR0L7Qu9GM0YjQvtC5INCh0L_QsNGB0L7Qs9C70LjQvdC40YnQtdCy0YHQutC40Lkg0L_QtdGA0LXRg9C70L7QuiwgMTAiCg1wihZCFYkFX0I%2C&z=19.69"
      frameborder="1"
      allowfullscreen="true"
      className="iframe-map"
      title="iframe-map"
      />
	</Col>
);

export default MyMap;