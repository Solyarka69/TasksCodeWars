function sumDigPow(a, b) {
  let res = [];
  
  for (let i = a; i < b; i++) {
    let iString = i.toString();
    let summ = 0;
    
    for (let j = 0; j < iString.length; j ++) {
      summ += Number(iString[j]) ** (j + 1);
    }
    
    if (summ === i) {
      res.push(summ);
    }
    
  }
  return res;
}
//50 from infinity...