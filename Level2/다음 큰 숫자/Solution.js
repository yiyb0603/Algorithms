function solution(n) {
  const nCount = n.toString(2).split('').filter((binary) => binary === '1').length;
  
  let i = n + 1;
  
  while (true) {
    const a = i.toString(2).split('').filter((b) => b === '1').length;

    if (a === nCount) {
      return i;
    }
    
    i++;
  }
}