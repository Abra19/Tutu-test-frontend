import { State } from '../utils/types';
import handleHeaderLinks from '../handlers/handleHeaderLinks';

const createHeader = (state: State) => {
  const trFirst = document.createElement('tr');
  const tableHeader = state.columns?.map(column => ({ name: column.toUpperCase(), originalName: column }));
  if (tableHeader) {
    tableHeader.forEach(key => {
      const th = document.createElement('th');
      const link = document.createElement('a');
      link.setAttribute('href', '');
      link.textContent = key.name;
      if (state.linkClasses[key.originalName]) {
        link.classList.add(...state.linkClasses[key.originalName]);
      }
      link.addEventListener('click', e => handleHeaderLinks(e, state, key));
      th.append(link);
      trFirst.append(th);
    });
  }
  return trFirst;
};

export default (container: Element | null, data: object[] | undefined | null, state: State) => {
	if (container) {
		container.innerHTML = '';
		const table = document.createElement('table');
		table.classList.add('table');
		const tbody = document.createElement('tbody');
    const trFirst = createHeader(state);
    tbody.append(trFirst);
    data?.forEach((el: any) => {
      const tr = document.createElement('tr');
      state.columns?.forEach(column => {
        const td = document.createElement('td');
        td.classList.add('cell', `cell-${column}`)
        td.textContent = el[column];
        tr.append(td);
      })
      tbody.append(tr);
		});
		table.append(tbody);
		container.append(table);
	}
};
