function findUniq(arr) {
  let a = arr[0];
  let b = arr[1];
  
  if (a === b) {
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== a) {
        return arr[i];
      }
    }
  } else {
    return arr[0] !== arr[2] ? arr[0] : arr[1];
  }
}
//38 from infinity...