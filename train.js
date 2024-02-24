//MIT Task G

function getHighestIndex(arr) {
    const sortedArr = arr.slice().sort((a, b) => b - a);
    return arr.indexOf(sortedArr[0]);
  }
  
  console.log(getHighestIndex([5, 21, 12, 21, 8]));
  