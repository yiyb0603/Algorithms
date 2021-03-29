function solution(phone_number) {
  let number = phone_number;
  let result = '';
  
  for (let i = 0; i < number.length; i++) {
    if (i >= (number.length - 4)) {
      result += number[i];
    } else {
      result += '*';
    }
  }
  
  return result;
}