function createPhoneNumber(numbers){
  let res = numbers.join('');
  return `(${res.slice(0, 3)}) ${res.slice(3, 6)}-${res.slice(-4)}`;
}
//13 from infinity...