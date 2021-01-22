function solution(s) {
  let splitString = s.split(" ");
  
  return splitString.map((word) => {
    let result = '';
    
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            result += word[i].toUpperCase();
        } else {
            result += word[i].toLowerCase();
        }
    }
    
    return result;
  }).join(' ');
}