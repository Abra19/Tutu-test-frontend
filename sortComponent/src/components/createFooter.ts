import { Elements, State } from '../utils/types';
import handlePageClick from '../handlers/handlePageClick';

export default (state: State, container: Element | null, elements: Elements) => {
	const footer = document.createElement('ul');
	footer.classList.add('footer');
	for (let i = 0; i < state.rows / state.pageSize; i += 1) {
		const listItem = document.createElement('li');
		const link = document.createElement('a');
		link.setAttribute('href', '');
		link.classList.add('pageLink');
		if (i + 1 === state.currentPage) {
			link.classList.add('activePageLink');
		}
		link.textContent = (i + 1).toString();
		listItem.append(link);
		footer.append(listItem);
		link.addEventListener('click', e => handlePageClick(e, state, elements, i, state.columns));
	}
	container?.append(footer);
}
