import { State } from '../utils/types';

export default (state: State) => {
  state.rows = state.allData ? state.allData.length : 0;
  state.columns?.forEach(column => {
    state.directions[column] = '';
   state.linkClasses[column] = ['headLink'];
  });
  state.sortedFields = [];
};
