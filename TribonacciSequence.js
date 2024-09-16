function tribonacci(signature,n){
  if (n === 0) {
    return [];
  }
  
  for (let i = 2; i < n; i++) {
    if (signature.length < n) {
      let temp = signature[i - 2] + signature[i - 1] + signature[i]
      signature.push(temp);
    }
  }
  
  if (n > 0) {
    return signature.slice(0, n);
  }
}
//48 from infinity...