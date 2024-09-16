function findMissingLetter(array) {
  const alphabit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y', 'z'];
  
  const firstLetter = array[0];
  const lastLetter = array[array.length - 1];
  let startIndex;
  let endIndex; 
  let firstLetterIsBig;
  
  if (array[0] === array[0].toUpperCase()){
    firstLetterIsBig = true;
  } else {
    firstLetterIsBig = false;
  }
  
  for (let i = 0; i < alphabit.length; i++) {
    if (firstLetter.toUpperCase() === alphabit[i].toUpperCase()) {
      startIndex = i;
    }
    if (lastLetter.toUpperCase() === alphabit[i].toUpperCase()){
      endIndex = i;
    }
  }
  
  let resArr = alphabit.slice(startIndex, endIndex + 1);
  
  for (let i = 0; i < resArr.length; i++) {
      if (resArr[i].toUpperCase() !== array[i].toUpperCase()) {
          return firstLetterIsBig ? resArr[i].toUpperCase() : resArr[i];
      }
  }
}
//20 from infinity...