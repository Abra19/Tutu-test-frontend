import { Elements, Routes, State, routesKey } from '../utils/types';
import constants from '../utils/constants';
import lazyLoad from '../loader';


import initState from '../initState';

export default (state: State, elements: Elements, routes: Routes, key: routesKey) => {
	const button = elements[`${key}Button`];
	button?.setAttribute('disabled', 'disabled');
	initState(state);
	/*
	state.allData = [];
	state.currentPage = 1;
	state.columns = [];
	state.directions = {};
	state.linkClasses = {};
	state.sortedDirections = [];
	state.sortedFields = []; */
	state.rows = key === 'big' ? constants.BIG_SIZE : constants.SMALL_SIZE;
	state.key = key;
	const rows = state.rows < state.pageSize ? state.rows : state.pageSize;
	lazyLoad(state, elements, routes, key, button, 0, rows).catch(console.log);
	if (state.rows > state.pageSize) {
		lazyLoad(state, elements, routes, key, null, state.pageSize, state.rows - state.pageSize).catch(console.log);
	}
};
