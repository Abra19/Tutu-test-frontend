import { State } from './utils/types';

export default (state: State) => {
  state.allData = [];
	state.currentPage = 1;
	state.columns = [];
	state.directions = {};
	state.linkClasses = {};
	state.sortedFields = [];
};
