function solution(strings, n) {
  let answer = strings;
  
  answer = answer.sort((a, b) => {
    if (a.charAt(n) === b.charAt(n)) {
      return (a > b) - (a < b);
    }
      
    if (a.charAt(n) < b.charAt(n)) {
      return -1;
    }
  });
  
  return answer;
}