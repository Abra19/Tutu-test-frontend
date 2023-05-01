import { Elements, State } from '../utils/types';
import createFooter from '../components/createFooter';
import createTable from '../components/createTable';

export default (e: any, state: State, elements: Elements, i: number) => {
	e.preventDefault();
  const { tableContainer } = elements;
  state.currentPage = i + 1;
	const scip = i * state.pageSize;
	const data = state.allData?.slice(scip, state.pageSize * state.currentPage);

	createTable(tableContainer, data, state);
	createFooter(state, tableContainer, elements);
}
