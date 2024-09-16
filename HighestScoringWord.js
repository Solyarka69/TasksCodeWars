function high(x) {
  const words = x.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numsSumms = [];
  
  for (let i = 0; i < words.length; i++) {
    let summ = 0;
    for (let j = 0; j < words[i].length; j++) {
      summ += alphabet.indexOf(words[i][j]) + 1;
    }
    numsSumms.push(summ);
  }
  
  let indexMaxSum = numsSumms.indexOf(Math.max(...numsSumms));
  
  return words[indexMaxSum];
}
//52 from infinity...