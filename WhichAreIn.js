function inArray(array1,array2){
  let res = [];
  for (let i = 0; i < array1.length; i++){
    let isTrue = false;
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) 
        isTrue = true;
    }
    if (isTrue) 
      res.push(array1[i]);
  }
  return res.sort();
}