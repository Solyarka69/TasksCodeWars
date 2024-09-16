function firstNonRepeatingLetter(s) {
  let arr = [];
  let correctS = s.split('');
  
  for (let i = 0; i < s.length; i++) {
    let countRepeat = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i].toLowerCase() === s[j].toLowerCase()) {
        countRepeat += 1;
      }
    }
    arr.push(s[i]);
    arr.push(countRepeat);
  }
  
  if (arr.indexOf(1) !== -1) {
    let indexNoRepeatable = arr.indexOf(1);
    return arr[indexNoRepeatable - 1];
  } else {
    return '';
  }
  
}
//60 from infinity...