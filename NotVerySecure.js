function alphanumeric(string){
  
  if (string.length === 0) {
    
    return false;
    
  }
  
  for (let i = 0; i < string.length; i++) {
    
    if (!/[a-zA-Z0-9]/.test(string[i])) {
      return false;
    }
    
  }
  
  return true;
  
}
//11 from infinity...