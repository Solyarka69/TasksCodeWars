
function sumArray(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  }
    
  const min = Math.min(...array);
  const max = Math.max(...array);
  let summ = 0;
  
  for (let num of array){
      summ += num;
  }
  
  return summ - min - max;
}

//4 from infinity...