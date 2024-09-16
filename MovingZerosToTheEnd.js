function moveZeros(arr) {
  let countZero = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero += 1;
    } else {
      result.push(arr[i]);
    }
  }
  
  for (let j = 0; j < countZero; j++){
    result.push(0);
  }
    
  return result
}

//6 from infinity...