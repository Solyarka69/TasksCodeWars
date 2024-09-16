function SeriesSum(n) {
  let res = 1;
  let temp = 4;
  
  if (n === 0) {
    return '0.00';
  } else if (n === 1) {
    return '1.00';
  }
  
  for (let i = 0; i < n - 1; i++) {
    
    res += 1 / temp;
    temp += 3;
    console.log(res);
  }
  
  return res.toFixed(2);
  
}
//27 from infinity...