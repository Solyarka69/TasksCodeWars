function maxProduct(numbers, size){
  
  numbers = numbers.sort((a, b) => a - b);
  
  let res = numbers.slice(-size);
  
  return res.reduce((proizv, el) => proizv *= el);
  
}
//58 from infinity...