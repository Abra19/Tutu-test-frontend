import { Elements, Routes, State, routesKey } from '../utils/types';
import constants from '../utils/constants';
import lazyLoad from '../loader';


export default (state: State, elements: Elements, routes: Routes, key: routesKey) => {
	const button = elements[`${key}Button`];
	button?.setAttribute('disabled', 'disabled');
	state.data = [];
	state.allData = [];
	state.currentPage = 1;
	state.rows = key === 'big' ? constants.BIG_SIZE : constants.SMALL_SIZE;
	state.key = key;
	const rows = state.rows < state.pageSize ? state.rows : state.pageSize;
	lazyLoad(state, state.data, elements, routes, key, button, 0, rows).catch(console.log);
	if (state.rows > state.pageSize) {
		lazyLoad(state, null, elements, routes, key, null, state.pageSize, state.rows - state.pageSize).catch(console.log);
	}
};
