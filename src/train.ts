//MIT TASK R
function calculate(str : string) : number {
  const parts = str.split('+');
  const result = parts.reduce((acc, num) => acc + Number(num), 0);
  return result;
}

console.log(calculate("1+3"));


