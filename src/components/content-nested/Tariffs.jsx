import { TARIFFS_HEADER, TARIFFS_INTRO_TEXT, tarif_prices } from "../../constants/constants";
import Tariff from "./tariff_card/Tariff";


const Tariffs = () => {
	return <div>
		<h1>{TARIFFS_HEADER}</h1>
		<p>{TARIFFS_INTRO_TEXT}</p>
		<div>
			{tarif_prices.map(el => <Tariff key={el.key} {...el} />)}
		</div>
	</div>
}

export default Tariffs;