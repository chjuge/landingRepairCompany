import { CONTACT_NUMBER, INTRO_MAIN_HEADER, INTRO_SECONDARY_HEADER, INTRO_TEXT } from "../../constants/constants";
import { PhoneTwoTone } from '@ant-design/icons';

const Intro = () => {
  return <div>
    <h1>{INTRO_MAIN_HEADER}</h1>
    <h3>{INTRO_SECONDARY_HEADER}</h3>
    <a href={`tel:${CONTACT_NUMBER}`}>
      {INTRO_TEXT}
      <PhoneTwoTone />
    </a>
  </div>
}

export default Intro;