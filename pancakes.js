const pancakes = (cakes, pans, pansCapacity, timeForOne) => {
  // how many sides to fry
  const sides = cakes * 2;

  // how many times use pans
  const quantity = sides / (pans * pansCapacity);

  // return time for all quantity
  return quantity * timeForOne;
};

console.log(pancakes(3, 2, 1, 1), 3);

console.log(pancakes(6, 2, 2, 1), 3);