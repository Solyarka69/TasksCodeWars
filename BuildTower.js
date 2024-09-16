function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    if (i === 0){
      let needToPush = ' '.repeat(nFloors - 1) + '*' + ' '.repeat(nFloors - 1);
      arr.push(needToPush);
    } else if(i > 0) {
      let needToPush = ' '.repeat(nFloors - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(nFloors - i - 1);
      arr.push(needToPush);
    }
  }
  return arr;
}
//So hard...
//12 from infinity...