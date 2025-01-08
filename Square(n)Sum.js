function squareSum(numbers){
  return numbers.length > 0 ? numbers.reduce((acc, el) => acc += Math.pow(el, 2), 0) : 0;
}