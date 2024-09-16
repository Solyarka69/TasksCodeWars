function findEvenIndex(arr) {
  let arrOnlyLeft = arr.slice(0, -1);
  let arrOnlyRight = arr.slice(1);
  
  let summArrOnlyLeft = arrOnlyLeft.reduce((summ, el) => summ += el, 0);
  let summArrOnlyRight = arrOnlyRight.reduce((summ, el) => summ += el, 0);
  
  if (summArrOnlyRight === 0){
    return 0;
  }
  
  for (let i = 1; i < arr.length - 1; i++) {
    let arrLeft = arr.slice(0, i);
    let arrRight = arr.slice(i + 1);
    
    let summArrLeft = arrLeft.reduce((summ, el) => summ += el);
    let summArrRight = arrRight.reduce((summ, el) => summ += el);
    
    if (summArrLeft === summArrRight) {
      return i;
    }
  }
  
  if (summArrOnlyLeft === 0) {
    return arr.length - 1;
  }
  
  return -1;
}
//So interesting kata...