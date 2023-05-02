import axios from 'axios';

import constants from './utils/constants';
import { Elements, Routes, State, routesKey } from './utils/types';

export default async (state: State, elements: Elements,
	routes: Routes, key: routesKey, button: Element | null, skip: number, rows: number) => {
	const rowsQuantity = key === 'big' ? `rows=${constants.BIG_SIZE}` : `rows=${constants.SMALL_SIZE}`;
	const route = routes[key].replace(rowsQuantity, `rows=${rows}&skip=${skip}`);
	if (key !== state.key) {
		state.columns = [];
	}
	try {
		const res = await axios.get(route);
		button?.toggleAttribute('disabled');
		state.allData?.push(...res.data);
		state.copyData?.push(...res.data);
		if (state.allData && state.columns && state.columns.length === 0) {
			const [first] = state.allData;
			const columns = Object.keys(first).slice(1, constants.TABLE_DATA_QUANTITY + 1);
			state.columns?.push(...columns);
			state.columns?.forEach(column => {
				state.directions[column] = '';
				state.linkClasses[column] = ['headLink'];
			});
		}
	} catch (err: any) {
		if (elements.tableContainer) {
			elements.tableContainer.textContent = err.message;
			elements.tableContainer.classList.add('error');
		}
	}
}
