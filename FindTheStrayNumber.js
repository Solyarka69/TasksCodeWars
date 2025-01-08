function stray(numbers) {
  let repeatedNum;
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < 2; i++) {
    if (numbers[i] === numbers[i + 1]) {
      repeatedNum = numbers[i];
    }
  }
  let res = numbers.reduce((acc, el) => acc += el, 0) - repeatedNum * (numbers.length - 1)
  return res;
}