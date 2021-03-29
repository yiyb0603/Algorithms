function solution(arr)
{
  const answer = [];
  let prevNum = -1;

  arr.forEach((num) => {
    if (prevNum != num) {
      answer.push(num);
    }

    prevNum = num; 
  });

  return answer;
}