function accum(s) {
  let res = `${s[0]}-`;
	for (let i = 1; i < s.length; i++) {
    res += s[i].toUpperCase();
    res += s[i].toLowerCase().repeat(i);
    if (i !== s.length - 1){
      res += '-';
    } else {
      return res;
    }
  }
}
//8 from infinity...