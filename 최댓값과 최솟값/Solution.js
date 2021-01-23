function solution(s) {
  const input = s;
  const numbers = input.split(" ").map((number) => Number(number));
  let maxValue = numbers[0];
  let minValue = Math.max.apply(null, numbers);
  
  numbers.forEach((number) => {
    if (number > maxValue) {
      maxValue = number;
    }
    
    if (number < minValue) {
      minValue = number;
    }
  });
  
  const answer = `${minValue} ${maxValue}`;
  return answer;
}