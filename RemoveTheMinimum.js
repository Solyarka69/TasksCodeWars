function removeSmallest(numbers) {
  let minValue = Math.min(...numbers);
  let res = [];
  let countMinNums = 0;
  let skip = 0;
  
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] === minValue) {
      countMinNums += 1;
    }
  }
  
  let flag = countMinNums === 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== minValue) {
      res.push(numbers[i]);
    } else if (!flag ) {
        skip += 1;
      if (skip > 1) {
        res.push(numbers[i]);
      }
    }
  }
  return res;
}