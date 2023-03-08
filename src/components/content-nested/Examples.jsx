import { Carousel } from "antd";
import { EXAMPLES_HEADER, images } from "../../constants/constants";
import { Image } from 'antd';

const Examples = () => {
  console.log(images);
  return <div>
    <h2>{EXAMPLES_HEADER}</h2>
    <div>
    
    <Carousel autoplay>
      {images.map((el, key = 0) => <Image key={(++key).toString()} width={600} src={el} alt='Пример работ' />)}
    </Carousel>
    </div>
  </div>
}

export default Examples;