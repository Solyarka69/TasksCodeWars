function count(string) {
  const obj = {};
  
  for (let char of string) {
    obj[char] ? obj[char] += 1 : obj[char] = 1;
  }
  return obj;
}
//51 from infinity...