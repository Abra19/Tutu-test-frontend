const checkSyntax = (string) => {
  const openBrackets = '<[{(';
  const closeBrackets = '>]})';
  const stack = [...string].reduce((acc, el) => {
    const openIndex = openBrackets.indexOf(el);
    const closeIndex = closeBrackets.indexOf(el);
    if (openIndex !== -1) {
     acc.push(el);
    } else if (closeIndex !== -1 && acc[acc.length - 1] === openBrackets[closeIndex]) {
      acc.pop();
    }
    return acc;
  }, []);
  return stack.length === 0 ? 0 : 1;
};

const test = (call, args, count) => {
  let r = (call.apply(null, args) === count);
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw "Test failed!";
}

try {
  test(checkSyntax, ["---(++++)----"], 0);
  test(checkSyntax, [""], 0);
  test(checkSyntax, ["before ( middle []) after "], 0);
  test(checkSyntax, [") ("], 1);
  test(checkSyntax, ["} {"], 1);
  test(checkSyntax, ["<(   >)"], 1);
  test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
  test(checkSyntax, ["   (      [)"], 1);
  test(checkSyntax, ["   (      [{( )}])"], 0);
  console.info("Congratulations! All tests passed.");
} catch(e) {
  console.log(e);
};
