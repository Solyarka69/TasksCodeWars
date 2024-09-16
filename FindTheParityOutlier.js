function findOutlier(integers){
  let countEven = 0;
  let countOdd = 0;
  
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0){
      countEven += 1;
    } else {
      countOdd += 1;
    }
  }
  
  if (countEven > 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0){
        return integers[i];
      } 
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0){
        return integers[i];
      } 
    }
  }
  
}
//19 from infinity...