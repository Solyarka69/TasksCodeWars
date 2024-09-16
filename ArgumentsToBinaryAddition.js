function arr2bin(arr){
  if (arr.length === 0 || arr.includes(null)) {
    return '0';
  }
  const summ = arr.reduce((acc, el) => {
    acc += (typeof el === 'number' ? el : 0);
    return acc;
  }, 0);
  return summ.toString(2);
}