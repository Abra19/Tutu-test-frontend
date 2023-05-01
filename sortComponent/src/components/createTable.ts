import { State } from '../utils/types';
import quickSortData from '../sorter';

export default (container: Element | null, data: object[] | undefined | null, state: State) => {
	if (container) {
		container.innerHTML = '';
		const table = document.createElement('table');
		table.classList.add('table');
		const tbody = document.createElement('tbody');
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
        link.addEventListener('click', e => {
          e.preventDefault();
          const direction = state.directions[key.originalName];
          state.directions[key.originalName] = direction === '' || direction === 'desc' ? 'asc' : 'desc';
          state.allData = quickSortData(state.allData, key, state.directions[key.originalName]);

    if (state.directions[key.originalName] === 'asc') {
      state.linkClasses[key.originalName].push('ascLink');
      state.linkClasses[key.originalName] = state.linkClasses[key.originalName].filter((el: string) => el !== 'descLink');
    } else if (state.directions[key.originalName] === 'desc') {
      state.linkClasses[key.originalName].push('descLink');
      state.linkClasses[key.originalName] = state.linkClasses[key.originalName].filter((el: string) => el !== 'ascLink');
    }

        });
        th.append(link);
        trFirst.append(th);
      });
    }
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
