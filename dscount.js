const dscount = (str, s1, s2) => {
  const uniStr = str.toLowerCase();
  const uniS1 = s1.toLowerCase();
  const uniS2= s2.toLowerCase();
  return [...uniStr].reduce((acc, el, i) => {
    if (el === uniS1 && uniStr[i + 1] === uniS2) {
      acc += 1;
    }
    return acc;
  }, 0);
};

const test = (call, args, count) => {
    let r = (call.apply(null, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}

try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}