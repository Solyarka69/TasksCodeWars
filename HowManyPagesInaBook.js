function amountOfPages(summary) {
  let res = '';
  for (let i = 1; i <= summary; i++) {
    if (res.length < summary) {
      res += i.toString();
    } else {
      return i - 1;
    }
  }
  return res.length;
}
//44 from infinity...