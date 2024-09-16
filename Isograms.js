function isIsogram(str){
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let countRepeat = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j])
        countRepeat += 1;
    }
    if (countRepeat > 1)
      return false;
  }
  return true;
}