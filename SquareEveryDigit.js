function squareDigits(num){
  const arr = ('' + num).split('');
  let res = '';
  for (let i = 0; i < arr.length; i++){
      let temp = Number(arr[i]) ** 2;
      res += temp.toString();
  }
  return Number(res);
}
