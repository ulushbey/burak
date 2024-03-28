//MIT TASK S
function missingNumber(nums : number[]) : number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
          return i;
      }
  }
  return nums.length;
}


console.log(missingNumber([3, 0, 1]));


