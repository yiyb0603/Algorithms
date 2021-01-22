function solution(s) {
  let answer = ""
  let str = s.split("");
  return str.sort().reverse().join("");
}