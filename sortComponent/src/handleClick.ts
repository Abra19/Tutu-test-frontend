import axios from 'axios';

import { Elements, State, Routes, routesKey } from './types';

export default async (state: State, elements: Elements, routes: Routes, key: routesKey) => {
  const button = elements[`${key}Button`];
  button?.setAttribute("disabled", "disabled");
  if (key === 'big') {
    state.rows = 1000;
  }
  const params = {
    skip: (state.currentPage - 1) * state.pageSize,
    rows: state.rows < state.pageSize ? state.rows : state.pageSize,
  }

  const rowsQuantity = key === 'big' ? 'rows=1000' : 'rows=32';
  const route = routes[key].replace(rowsQuantity, `rows=${params.rows}&skip=${params.skip}`);
  try {
    state.data = [];
    const res = await axios.get(route);
    console.log(res);
    button?.toggleAttribute("disabled");
    if (state.data) {
      state.data.push(...res.data);
    }
    } catch (err: any) {
      if (elements.tableContainer) {
        elements.tableContainer.textContent = err.message;
      }
    }
};
