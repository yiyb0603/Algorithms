function solution(array, commands) {
  const answerList = [];
      
  for (let i = 0; i < commands.length; i++) {
    const startIdx = commands[i][0];
    const endIdx = commands[i][1];
    const answerIdx = commands[i][2];

    const temps = [];

    for (let j = startIdx - 1; j <= endIdx - 1; j++) {
      temps.push(array[j]);
    }

    if (answerIdx >= temps.length) {
      answerList.push(temps[answerIdx - temps.length]);
      continue;
    }

    temps.sort((a, b) => a - b);
    answerList.push(temps[answerIdx - 1]);
  }

  return answerList;
}