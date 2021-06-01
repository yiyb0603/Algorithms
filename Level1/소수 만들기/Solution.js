function solution(nums) {
  const sums = [];
  const combinations = combination(nums, 3);

  for (const combination of combinations) {
    let sum = 0;
    combination.map((com) => sum += Number(com));

    if (isPrimeNumber(sum)) {
      sums.push(sum);
    }
  }

  const result = sums.length;
  return result;
}

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function combination(arr, selectCount) {
  const result = [];

  if (selectCount <= 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((value, idx, arr) => {
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectCount - 1);
    const combineFix = combinationArr.map((combination) => [...combination, value]);

    result.push(...combineFix);
  });

  return result;
}