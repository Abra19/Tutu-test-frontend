import { Elements, State } from './utils/types';
import createFooter from './components/createFooter';
import createTable from './components/createTable';

export default (state: State, elements: Elements) => {
	const { tableContainer } = elements;
	const { data } = state;
	if (data && data.length !== 0) {
		const [first] = data;
		const columns = Object.keys(first).slice(1, 6);
		createTable(tableContainer, columns, data);
		if (state.rows > state.pageSize) {
			createFooter(state, tableContainer, elements, columns);
		}
	}
};
