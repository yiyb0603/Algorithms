function solution(n, stages) {
  const percents = [];
  
  for (let i = 1; i < n + 1; i++) {
    const filtered = stages.filter((stage) => stage === i);
    
    const calc = filtered.length / stages.length;
    percents.push({
      id: i,
      percent: calc,
    });
    
    stages = stages.filter((stage) => stage !== i);
  }
  
  percents.sort((a, b) => b.percent - a.percent);
  return percents.map((percent) => percent.id);
}