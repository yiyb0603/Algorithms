function solution(n, words) {
  const dictionary = [];
  const said = [];

  for (let i = 0; i < words.length; i++) {
    dictionary.push({
      word: words[i],
      idx: i,
      personIdx: i < n ? i + 1 : (i % n) + 1,
    });
  }
  
  let isCorrect = true;
  for (let i = 0; i < dictionary.length; i++) {
    const { word, personIdx } = dictionary[i];
    
    if (word.length === 1) {
      return [(i % n) + 1, Math.floor((i / n) + 1)];
    }
    
    const exist = said.find((say) => say.word === word);
    if (exist) {
      return [(i % n) + 1, Math.floor((i / n) + 1)];
    }
    
    said.push({
      word,
      personIdx,
    });
    
    if (i < dictionary.length - 1) {
      if (
        word.charAt(word.length - 1) !== dictionary[i + 1].word.charAt(0)
      ) { 
        isCorrect = false;
        let count = dictionary.filter((data) => {
            return data.personIdx === dictionary[i + 1].personIdx;
        });
        
        const findIndex = count.findIndex((data) => data.word === dictionary[i + 1].word);
        
        if (findIndex > -1) {
            count = count.slice(0, findIndex + 1);
        }

        return [dictionary[i + 1].personIdx, count.length];
      }
    }
  }
  
  if (isCorrect) {
    return [0, 0];
  }
}