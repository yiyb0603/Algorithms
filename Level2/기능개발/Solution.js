function solution(progresses, speeds) {
  const result = [0];
  
  const divides = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });
  
  let max = divides[0];
  
  for (let i = 0, j = 0; i < divides.length; i++){
    if (divides[i] <= max) {
      result[j] += 1;
    } else {
      max = divides[i];
      result[++j] = 1;
    }
  }
    
  return result;
}