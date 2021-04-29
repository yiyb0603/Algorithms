function solution(peoples, limit) {
  peoples.sort((a, b) => b - a);
  
  let answer = peoples.length;
  let end = peoples.length - 1;
  
  for (let i = 0; i < end; i++) {
    if (peoples[i] + peoples[end] <= limit) {
      answer--;
      end--;
    }
  }
  
  return answer;
}