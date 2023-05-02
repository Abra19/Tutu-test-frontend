import { Elements, State } from '../utils/types';
import createPage from '../components/createPage';

export default (e: any, state: State, elements: Elements, i: number) => {
	e.preventDefault();
  state.currentPage = i + 1;
	const scip = i * state.pageSize;
	const data = state.allData?.slice(scip, state.pageSize * state.currentPage);
	createPage(state, data, elements);
}
