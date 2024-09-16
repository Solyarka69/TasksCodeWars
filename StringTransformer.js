function stringTransformer(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res.split(' ').reverse().join(' ');
}
//36 from infinity...