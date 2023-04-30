import onChange from 'on-change';

import { Elements, State } from './utils/types';
import constants from './utils/constants';
import handleClick from './handlers/handleClick';
import renderPage from './renderPage';

export default () => {
	const elements: Elements = {
		bigButton: document.querySelector('.bigButton'),
		smallButton: document.querySelector('.smallButton'),
		tableContainer: document.querySelector('.tableWrapper'),
	}

	const routes = {
		big: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}',
		small: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}',
	}

	const data: object[] = [];
	const allData: object[] = [];

	const state: State = {
		sortKey: 'name', // name, value !!!!!
		sortType: 'asc', // asc, desc !!!!!
		currentPage: 1,
		data,
		allData,
		pageSize: constants.PAGE_SIZE,
		rows: constants.SMALL_SIZE,
		key: 'small',
	};

	const watchedState: State = onChange(state, () => renderPage(watchedState, elements));

	elements.bigButton?.addEventListener('click', () => handleClick(watchedState, elements, routes, 'big'));
	elements.smallButton?.addEventListener('click', () => handleClick(watchedState, elements, routes, 'small'));
}


