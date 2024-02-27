// MIT TASK H

function getPositive(arr: number[]) : string {
    const a: number[] = arr.filter(num => num > 0);  
    return a.join('');
  }
  
  
  console.log(getPositive([1, -4, 2, ])); 
  

