function solution(n) {
  let sqrtNum = Math.floor(Math.sqrt(n));
      
  if (sqrtNum !== Math.sqrt(n)) {
    return -1;
  }

  return (sqrtNum + 1) * (sqrtNum + 1);
}