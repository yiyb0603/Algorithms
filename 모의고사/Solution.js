function solution(answers) {
  const answer = [];
  const firstStudent = [1, 2, 3, 4, 5];
  const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;
  
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstStudent[i % 5]) {
      firstCount++;
    }
    
    if (answers[i] === secondStudent[i % 8]) {
      secondCount++;    
    }
    
    if (answers[i] === thirdStudent[i % 10]) {
      thirdCount++;
    }
  }
  
  const cntArr = [firstCount, secondCount, thirdCount];
  const maxValue = Math.max.apply(null, cntArr);
  
  cntArr.forEach((cnt, idx) => {
    if (cnt === maxValue) {
      answer.push(idx + 1);
    }
  });
  
  return answer.sort((a, b) => a - b);
}