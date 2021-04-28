function solution(lottos, win_nums) {
  const ranks = [6, 6, 5, 4, 3, 2, 1];
  lottos.sort((a, b) => b - a);
  win_nums.sort((a, b) => b - a);
  
  let count = 0;

  for (let i = 0; i < lottos.length; i++) {
    const lotto = win_nums.find((num) => num === lottos[i]);
    if (lotto) {
      count++;
    }
  }
  
  if (count === lottos.length) {
    return [1, 1];
  }
  
  const zeroCount = lottos.filter((lotto) => lotto === 0).length;
  
  if (zeroCount === lottos.length) {
    return [1, lottos.length];
  }
  
  return [ranks[(zeroCount + count)], ranks[count]];
}