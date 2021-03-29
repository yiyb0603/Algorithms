function solution(s){
  let alphaPCount = 0;
  let alphaYCount = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i).toLowerCase() === 'y') {
      ++alphaYCount;
    } else if (s.charAt(i).toLowerCase() === 'p') {
      ++alphaPCount;
    }
  }
  
  if (alphaPCount === alphaYCount) {
    return true;
  } else {
    return false;
  }
}