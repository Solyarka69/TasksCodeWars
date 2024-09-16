function findUniq(arr) {
  let a = 'TomMarvoloRiddle'.toLowerCase();
  let b = 'IamLordVoldemort'.toLowerCase();
  let c = 'HarryPotter'.toLowerCase();

  console.log(new Set(a.split('').sort()));
  console.log(new Set(b.split('').sort()));
  console.log(new Set(c.split('').sort()));
  
  let arrNew = arr.map((el) => el.toLowerCase());

  
  for (let i = 0; i < arr.length; i++) {
    if (new Set(arrNew[i].split('').sort()).size > new Set(arrNew[i + 1].split('').sort()).size) {
      return arr[i];
    } else if (new Set(arrNew[i].split('').sort()).size < new Set(arrNew[i + 1].split('').sort()).size) {
      return arr[i + 1];
    } 
  }
}
