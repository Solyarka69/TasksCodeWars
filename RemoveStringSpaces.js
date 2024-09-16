function noSpace(x){
  let res = [];
  let tempData = '';
  for (let i = 0; i < x.length; i ++) {
    if (x[i] !== ' ') {
      tempData += x[i];
    } else {
      res.push(tempData);
      tempData = '';
    }
  }
  res.push(tempData);
  return res.join('');
}
//16 from infinity...