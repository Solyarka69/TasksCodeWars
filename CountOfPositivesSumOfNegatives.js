function countPositivesSumNegatives(input) {
  if (input == null || input.length === 0) { return []; }
  let res = [];
  let countPositiveNumbers = 0;
  let summNegativeNumbers = 0;
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositiveNumbers += 1;
    } else {
      summNegativeNumbers += input[i];
    }
  }
  res.push(countPositiveNumbers);
  res.push(summNegativeNumbers);
  return res;
}
//23 from infinity...