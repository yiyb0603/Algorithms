function solution(s) {
  let result = '';
  if (s.length % 2 === 0) {
    for (let i = (s.length / 2) - 1; i < (s.length / 2) + 1; i++) {
      result += s.charAt(i);
    }
  } else {
    result = s.charAt((s.length / 2));
  }
  return result;
}