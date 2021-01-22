function solution(n)
{
  const numArray = n.toString().split("");
  let sum = 0;
  
  numArray.forEach((num) => {
    sum += Number(num);
  });

  return sum;
}