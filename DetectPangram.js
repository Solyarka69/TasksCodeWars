function isPangram(string){
  let res = string.toUpperCase().match(/[A-Z]/g);
  let setRes = new Set(res);
  
  return setRes.size === 26;
}
//31 from infinity...