import { Elements, State } from '../utils/types';
import createFooter from '../components/createFooter';
import createTable from '../components/createTable';
import createFoundZone from '../components/createFoundZone';

export default (state: State, data: object[] | undefined | null, elements: Elements) => {
  const { tableContainer, findContainer } = elements;
  createFoundZone(findContainer, state);
  createTable(tableContainer, data, state);
  if (state.rows > state.pageSize && state.allData && state.allData.length !== 0) {
    createFooter(state, elements);
  }
};
