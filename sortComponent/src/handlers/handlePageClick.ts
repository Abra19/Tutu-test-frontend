import { Elements, State } from '../utils/types';
import createFooter from '../components/createFooter';
import createTable from '../components/createTable';

export default (e: any, state: State, container: Element | null, elements: Elements, i: number, columns: string[]) => {
	e.preventDefault();
  const { tableContainer } = elements;
  state.currentPage = i + 1;
	const scip = (state.currentPage - 1) * state.pageSize;
	const data = state.allData?.slice(scip, state.pageSize * state.currentPage);

	createTable(tableContainer, columns, data);
	createFooter(state, tableContainer, elements, columns);
}
