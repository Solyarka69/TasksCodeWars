function generateHashtag (str) {
  let words = str.trim().split(' ');
  let correctWords = words.filter((el) => el !== '');
  
  if (correctWords.includes('') || str.length === 0 || correctWords.length === 0) {
    return false;
  }

  let res = correctWords.map((el) => el[0].toUpperCase() + el.slice(1));
  
  let ans = '#' + res.join('');
  
  return ans.length < 141 ? ans : false;
}