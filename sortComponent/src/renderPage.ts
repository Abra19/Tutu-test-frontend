import _ from 'lodash';
import { Elements, State } from './utils/types';
import createPage from './components/createPage';


export default (state: State, elements: Elements) => {
	const { allData } = state;
  const data = allData && allData.length !== 0
    ? state.allData?.slice((state.currentPage - 1) * state.pageSize, state.pageSize * state.currentPage)
    : state.allData;
    createPage(state, data, elements);
};
