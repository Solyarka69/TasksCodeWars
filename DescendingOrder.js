function descendingOrder(n){
  let res =  n.toString().split('');
  res.map((str) => parseInt(str));
  res.sort((a, b) => b - a);
  return parseInt(res.join(''));
}
//25 from infinity...