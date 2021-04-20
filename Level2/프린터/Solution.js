function solution(priorities, location) {
  let prios = [];
  
  let count = 0;
  for (const priority of priorities) {
    prios = [
      ...prios,
      {
        value: priority,
        index: count,
      },
    ];
      
    count++;
  }
  
  count = 0;
  
  while (prios.length) {
    let first = prios[0];
    const hasMax = prios.some((prio) => prio.value > first.value);
    
    if (hasMax) {
      prios.push(prios.shift());
    } else {
      count++;
      const shifted = prios.shift();
      
      if (shifted.value === priorities[location] && shifted.index === location) {
        break;   
      }
    }
  }
  
  return count;
}