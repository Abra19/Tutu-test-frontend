export default (container: Element | null, columns: string[], data: object[] | undefined | null) => {
	if (container) {
		container.innerHTML = '';
		const table = document.createElement('table');
		table.classList.add('table');
		const tbody = document.createElement('tbody');
		const trFirst = document.createElement('tr');

		const tableHeader = columns.map(column => ({ name: column.toUpperCase() }));
		tableHeader.forEach(key => {
			const th = document.createElement('th');
			const link = document.createElement('a');
			link.setAttribute('href', '');
			link.textContent = key.name;
			link.classList.add('headLink');
			let count = 0;
			link.addEventListener('click', e => {
				e.preventDefault();
				if (count % 2 === 0) {
					link.classList.add('ascLink');
					link.classList.remove('descLink');
				} else {
					link.classList.remove('ascLink');
					link.classList.add('descLink');
				}
				count += 1;

			});
			th.append(link);
			trFirst.append(th);
		});
		tbody.append(trFirst);
		data?.forEach((el: any) => {
			const tr = document.createElement('tr');
			columns.forEach(column => {
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
}


/*

  datas.sort(([a1, a2], [b1, b2]) => {
    if (state.sortKey === 'name' && state.sortType === 'asc') {
      return a1.localeCompare(b1) === 0 ? a2.localeCompare(b2) : a1.localeCompare(b1);
    }
    if (state.sortKey === 'name' && state.sortType === 'desc') {
      return b1.localeCompare(a1) === 0 ? b2.localeCompare(a2) : b1.localeCompare(a1);
    }
    if (state.sortType === 'asc') {
      return a2.localeCompare(b2) === 0 ? a1.localeCompare(b1) : a2.localeCompare(b2);
    }
    return b2.localeCompare(a2) === 0 ? b1.localeCompare(a1) : b2.localeCompare(a2);
  })
    .forEach(([key, value]) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.textContent = key;
      td2.textContent = value;
      tr.append(td1);
      tr.append(td2);
      tbody.append(tr);
    });

  table.append(tbody);
  container.append(table); */
