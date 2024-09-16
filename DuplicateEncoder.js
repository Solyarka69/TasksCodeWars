function duplicateEncode(word){
  let countsRepeat = [];
  let res = '';
  
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    
    for (let j = 0; j < word.length; j++) {
      if (word[i].toUpperCase() === word[j].toUpperCase()) {
        count += 1;
      } 
    }
    countsRepeat.push(count);
  }
  
  for (let l = 0; l < word.length; l++) {
    countsRepeat[l] > 1 ? res+= ')' : res+= '('; 
  }
  return res;
}
//29 from infinity...
