import { ADDRESS, CALL_TO_MANAGER } from "../../constants/constants";
import MyMap from "./MyMap";

const Contacts = () => (
	<>
    <h1>{CALL_TO_MANAGER}</h1>
		<MyMap />
    <div>
      <p>{ADDRESS}</p>
    </div>
	</>
)

export default Contacts;