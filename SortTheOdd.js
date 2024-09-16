function sortArray(array) {
  let oddNumbers = [];
  let oddNumbersIndexes = [];
 
  for (let i = 0; i < array.length; i++) {
    // четные пропускаем
    if (array[i] % 2 === 0) continue;
    oddNumbers.push(array[i]);
    oddNumbersIndexes.push(i);
  }
  oddNumbers.sort((a,b) => a - b);

 
  for (let j = 0; j < oddNumbersIndexes.length; j++) {
    array[oddNumbersIndexes[j]] = oddNumbers[j];
  }
  return array;
}
//21 from infinity...