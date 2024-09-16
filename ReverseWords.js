function reverseWords(str) {
  let arr = str.split(' ');
  arr = arr.map((el) => el.split('').reverse().join(''));
  return arr.join(' ');
}
//56 from infinity...