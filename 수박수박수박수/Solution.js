function solution(n) {
  let word = '수';
  
  for (let i = 0; i < n - 1; i++) {
    word += word.charAt(i) === '수' ? '박' : '수';
  }
  
  return word;
}