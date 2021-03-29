function solution(s) {
  const lowerString = s.toLowerCase()
  const splited = lowerString.split(" ");
  const answer = splited.map((lower) => {
    let arr = lower.split("")
    if (arr[0] != null) {
      arr[0] = arr[0].toUpperCase();
    }
    
    return arr.join('');
  }).join(' ');

  return answer;
}