function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result = [...result, arr[i]];
    }
  }

  result = result.sort((a, b) => {
      return a - b;
  });
  
  if (result.length === 0) {
    result = [...result, -1];
  }
  
  return result;
}