function narcissistic(value) {
  let valueStr = value.toString();
  let summ = 0;
  
  if (valueStr.length === 1) {
    return true;
  }
  
  for (let i = 0; i < valueStr.length; i++) {
    summ += Math.pow(Number(valueStr[i]), valueStr.length);
  }
  
  return summ === value;
}
//49 from infinity...