function solution(left, right) {
  let total = 0;
  const dictionary = [];
  
  for (let i = left; i <= right; i++) {
    const temp = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        temp.push(j);
      }
      
      if (j === i) {
        dictionary.push({
          number: i,
          count: temp.length,
        });
      }
    }
  }
  
  for (const diction of dictionary) {
    if (diction.count % 2 === 0) {
      total += diction.number;
    } else {
      total -= diction.number;
    }
  }
  
  return total;
}