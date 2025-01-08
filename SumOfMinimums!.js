function sumOfMinimums(arr) {
  let res = 0;
  
  for (let val of arr) {
//     console.log(val);
    res += Math.min(...val);
  }
  return res;
}