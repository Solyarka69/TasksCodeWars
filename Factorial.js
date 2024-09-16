function factorial(n) {
  
  let result = 1;
  
  if (n < 0 || n > 12) {
    
    throw new RangeError("Неверно указан номер месяца");
    
  } else {
    
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    
  }
  
  return result;
  
}