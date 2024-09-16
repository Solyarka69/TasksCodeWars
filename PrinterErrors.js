function printerError(s) {
  let errChars = 'nopqrstuvwxyz';
  let countErrs = 0;
  for (let i = 0; i < s.length; i++) {
    if (errChars.includes(s[i])) {
      countErrs += 1;
    }
  }
  return `${countErrs}/${s.length}`;
}
//66 from infinity...