function solution(n, arr1, arr2) {
  let result = [];
  const firstMap = [];
  const secondMap = [];
  
  for (let i = 0; i < n; i++) {
    let binaryNumber1 = arr1[i].toString(2);
    let binaryNumber2 = arr2[i].toString(2);
    
    if (binaryNumber1.length < n) {
      const fill = "0".repeat(n - binaryNumber1.length);
      binaryNumber1 = fill + binaryNumber1;
    }
    
    if (binaryNumber2.length < n) {
      const fill = "0".repeat(n - binaryNumber2.length);
      binaryNumber2 = fill + binaryNumber2;
    }
    
    firstMap.push(binaryNumber1);
    secondMap.push(binaryNumber2);
  }
  
  let str = '';
  for (let i = 0; i < n; i++) {
    str = '';
      
    for (let j = 0; j < firstMap[i].length; j++) {
      if (firstMap[i].charAt(j) === '1' || secondMap[i].charAt(j) === '1') {
        str += '#';
      } else {
        str += ' ';
      }
    }
    
    result.push(str);
  }
  
  return result;
}