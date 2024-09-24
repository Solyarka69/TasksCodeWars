function squeakyClean(arr) {
  let correctArr = [];
  for (let key of arr) 
    if ((key != '') && (key != null) && (key != undefined))  correctArr.push(key);
    
  return correctArr;
}