function solution(num) {
  let count = 0;
      
  while (num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else if (num % 2 == 1) {
      num = 3 * num + 1;
    }

    if (count == 500) {
      count = -1;
      break;
    }

    count++;
  }

  return count;
}