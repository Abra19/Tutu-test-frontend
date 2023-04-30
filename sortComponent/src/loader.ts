import axios from 'axios';

import constants from './utils/constants';
import { Elements, Routes, State, routesKey } from './utils/types';

export default async (state: State, data: object[] | null, elements: Elements,
	routes: Routes, key: routesKey, button: Element | null, skip: number, rows: number) => {
	const rowsQuantity = key === 'big' ? `rows=${constants.BIG_SIZE}` : `rows=${constants.SMALL_SIZE}`;
	const route = routes[key].replace(rowsQuantity, `rows=${rows}&skip=${skip}`);
	try {
		const res = await axios.get(route);
		button?.toggleAttribute('disabled');
		data?.push(...res.data);
		if (data) {
			state.allData?.push(...data);
		} else {
			state.allData?.push(...res.data);
		}
	} catch (err: any) {
		if (elements.tableContainer) {
			elements.tableContainer.textContent = err.message;
			elements.tableContainer.classList.add('error');
		}
	}
}
