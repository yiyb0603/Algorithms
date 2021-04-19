function solution(absolutes, signs) {
  let total = 0;
  const convertNumbersBySign = [];
  
  for (let i = 0; i < absolutes.length; i++) {
      const pushNumber = !(signs[i]) ? (absolutes[i] * -1) : absolutes[i];
      convertNumbersBySign.push(pushNumber);
  }
  
  convertNumbersBySign.map((sign) => total += sign);
  return total;
}