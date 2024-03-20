//MIT TASK O

function calculateSumOfNumbers(arr: (number | string | { number: number } | boolean)[]): number {
  let sum = 0;
  arr.map(value => {
      if (typeof value === 'number') {
          sum += value;
      }
  });
  return sum;
}

const result= calculateSumOfNumbers([10, "10", { number: 10 }, true, 35]);
console.log(result); 
