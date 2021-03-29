function solution(nums) {
  let count = 1;
  const divide = nums.length / 2;
  
  nums.sort((a, b) => {
    return b - a;
  });
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1] && count < divide) {
      count++;
    }
  }
  
  return count;
}