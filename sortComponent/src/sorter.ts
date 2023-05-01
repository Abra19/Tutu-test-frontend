const quickSort = (data: object[] | null, link: { name: string; originalName: string }, direction: string): any => {
  if (!data || data.length === 0) {
    return [];
  }
  const baseIndex = Math.floor(Math.random() * (data.length - 1));
  const base: any = data[baseIndex];
  const index = base[link.originalName];

  const left = [];
  const right = [];
  const middle = [];

  for (let i = 0; i < data.length; i += 1) {
    const el: any = data[i];
    if (el[link.originalName] < index) {
      direction === 'asc' ? left.push(el) : right.push(el);
    } else if (el[link.originalName] > index) {
      direction === 'asc' ? right.push(el) : left.push(el);
    } else {
      middle.push(el);
    }
  }

  return [...quickSort(left, link, direction), ...middle, ...quickSort(right, link, direction)];
}

export default quickSort;
