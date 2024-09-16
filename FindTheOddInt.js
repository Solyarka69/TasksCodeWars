function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }
  
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count += 1;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}
//22 from infinity...