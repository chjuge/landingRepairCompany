import { Row, Col } from "antd";
import { EXAMPLES_HEADER, images } from "../../constants/constants";
import { Image } from 'antd';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Examples = () => (
  <Col span={24}>
    <h2>{EXAMPLES_HEADER}</h2>
    <Row justify={"center"} align={'center'}>
      <Col span={14}>
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          {images.map((el, key = 0) =>(
            <Image key={(++key).toString() + Date.now()}  src={el} alt='Пример работ' />
          ))}
        </Carousel>
     </Col>
    </Row>
  </Col>
)

export default Examples;
