import { State } from '../utils/types';
import initSort from '../initialize/initSort';
import updateData from '../utils/updateData';

export default (e: any, state: State, input: any) => {
  e.preventDefault();
  const foundValue = input.value;
  if (foundValue === '') {
    state.allData = state.copyData;
    initSort(state);
  } else {
    updateData(state, foundValue);
  }
};
