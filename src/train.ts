//MIT TASK N

function palindromeCheck(str : string) : boolean {
  const x = str.split('');
  const matches = x.map((ele, index) => ele === x[x.length - 1 - index]);
  return !matches.includes(false);
}

console.log(palindromeCheck("dad"));     
console.log(palindromeCheck("son")); 