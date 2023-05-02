import { State } from '../utils/types';
import initSort from '../initialize/initSort';

export default (state: State, found: string) => {
  if (state.allData) {
    state.allData = state.allData.filter(el => {
      const values = Object.values(el);
      return values.map(value => value.toString().includes(found)).includes(true);
    });
    state.currentPage = 1;
    initSort(state);
  }
};
