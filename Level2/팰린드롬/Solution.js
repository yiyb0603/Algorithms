function solution(n) {
  const text = n.toString();
  const divideLength = Math.floor(text.length / 2);

  let answer = true;

  for (let i = 0; i < divideLength; i++) {
    if (text.charAt(i) === text.charAt(divideLength - 1 - i)) {
      continue;
    } else {
      answer = false;
      break;
    }
  }

  return answer;
}