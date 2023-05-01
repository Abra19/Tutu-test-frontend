import { Elements, State } from './utils/types';
import createFooter from './components/createFooter';
import createTable from './components/createTable';

export default (state: State, elements: Elements) => {
	const { tableContainer } = elements;
	const { allData } = state;
	if (allData && allData.length !== 0) {
    const data = state.allData?.slice(0, state.pageSize);
		createTable(tableContainer, data, state);
		if (state.rows > state.pageSize) {
			createFooter(state, tableContainer, elements);
		}
	}
};
