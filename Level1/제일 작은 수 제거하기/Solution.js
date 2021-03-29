function solution(arr) {
  let answer = arr;
  let min = answer[0];
  
  answer.forEach((data, idx) => {
    if (min > data) {
      min = data;
    }
  });
  
  answer = answer.filter((data) => data !== min);
  if (!answer.length) {
    answer = [...answer, -1];
  }
  
  return answer;
}