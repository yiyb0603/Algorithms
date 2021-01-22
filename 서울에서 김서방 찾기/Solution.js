function solution(seoul) {
  const findIndex = seoul.findIndex(data => data === "Kim");
  const result = `김서방은 ${findIndex}에 있다`;
  return result;
}