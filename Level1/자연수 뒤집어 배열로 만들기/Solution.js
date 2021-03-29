function solution(n) {
  const charArr = n.toString().split("").reverse();
  
  return charArr.map((char) => Number(char));
}