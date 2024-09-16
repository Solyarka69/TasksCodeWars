function wave(str){
  let res = [];
  
  for (let i = 0; i <  str.length; i++) {
    
    if (str[i] === ' ') { continue; }
    
    let temp1 = str.slice(0, i);
    let temp2 = str.slice(i + 1);
    res.push(temp1 + str[i].toUpperCase() + temp2);
    
}
  return res;
}
//43 from infinity...