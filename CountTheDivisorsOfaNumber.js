function getDivisorsCnt(n){
  let countDels;
  n > 1 ? countDels = 2 : countDels = 1;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let secondDel = n / i;
      if (secondDel === i){
        countDels += 1;
      } else {
        countDels += 2;
      }
    }
  }
  return countDels;
}
//17 from infinity...