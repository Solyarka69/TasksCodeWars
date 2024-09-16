function findMissingNumbers(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i] + 1; j < arr[i + 1]; j++) 
      res.push(j);
  }
  return res;
}
//28 from infinity...