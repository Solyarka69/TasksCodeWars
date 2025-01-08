function spinWords(string){
  let arr = string.split(' ');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      res.push(arr[i].split('').reverse().join(''));
    } else {
      res.push(arr[i]);
    }
  }
//   console.log(arr)
//   console.log(res)
  return res.join(' ');
}