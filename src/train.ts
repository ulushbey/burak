//MIT TASK M

function getSquareNumbers(numbers : number[]) : {number : number, square : number }[] {
  return numbers.map(number => {
      return {
        
          number: number,
          square: number * number
      };
  });
}

console.log(getSquareNumbers([1, 2, 3])); 
