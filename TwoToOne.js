function longest(s1, s2) {
  let set = new Set(s1 + s2);
  let arr = [...set];
  arr = arr.sort();
  arr = arr.join('');
  return arr;
}
//42 from infinity...