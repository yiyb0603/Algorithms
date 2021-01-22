function solution(arr) {
  let total = 0.0;
      
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}