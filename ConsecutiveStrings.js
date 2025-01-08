function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }
  
  let results = [];
  let trueLenArr = strarr.length;
  
  for (i = 0; i < trueLenArr; i++) {
    
    let tempStr = strarr.slice(0, k).join('');
    results.push(tempStr);
    strarr.shift();
    strarr.filter(el => el !== undefined);
    
  }
  results.sort((a, b) => a.length - b.length);

  for (j of results) 
    if (j.length === results[results.length - 1].length)
      return j;

}
// n to infinity..