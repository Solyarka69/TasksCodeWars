function isValidWalk(walk) {
  if (walk.length !== 10) {return false;}
  let n = 0;
  let w = 0;
  let s = 0;
  let e = 0;
  
  for (let key of walk){
    if (key === 'n') n++;
    if (key === 's') s++;
    if (key === 'w') w++;
    if (key === 'e') e++;
  }
  
  if (n === s && w === e) {return true;}
  return false;
}
//My second attempt use CodeWars...