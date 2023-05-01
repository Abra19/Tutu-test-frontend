import _ from 'lodash';

import { State, headerKeys } from '../utils/types';

export default (e: any, state: State, key: headerKeys) => {
  e.preventDefault();
  const direction = state.directions[key.originalName];
  state.directions[key.originalName] = direction === '' || direction === 'desc' ? 'asc' : 'desc';
  const keys = Object.keys(state.directions).filter(el => state.directions[el] !== '');
  const directions = keys.map(el => state.directions[el]);
  state.allData = _.orderBy(state.allData, keys, directions);

  if (state.directions[key.originalName] === 'asc') {
    state.linkClasses[key.originalName].push('ascLink');
    state.linkClasses[key.originalName] = state.linkClasses[key.originalName].filter((el: string) => el !== 'descLink');
  } else if (state.directions[key.originalName] === 'desc') {
    state.linkClasses[key.originalName].push('descLink');
    state.linkClasses[key.originalName] = state.linkClasses[key.originalName].filter((el: string) => el !== 'ascLink');
  }
};
