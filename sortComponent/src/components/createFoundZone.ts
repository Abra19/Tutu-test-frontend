import { State } from '../utils/types';
import handleFound from '../handlers/handleFound';


export default (container: Element | null, state: State) => {
  if (container) {
    container.innerHTML = '';
  }
  const form = document.createElement('form');
  form.classList.add('findForm');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', '');
  input.classList.add('inputForFind');
  form?.append(input);

  const button = document.createElement('button');
  button.textContent = 'Найти';
  button.setAttribute('type', 'submit');
  button.classList.add('findButton')

  form?.append(button);
  container?.append(form);

  form.addEventListener('submit', (e: any) => handleFound(e, state, input));
};
