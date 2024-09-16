function bearDollars(arr) {
  let CloseFriend = 0;
  let Friend = 0;
  let Acquaintance = 0;
  let OtherPeoples = 0;
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i][1].toUpperCase() === 'CLOSE FRIEND'){
      
      CloseFriend += arr[i][0] * 25;
      
    } else if (arr[i][1].toUpperCase() === 'ACQUAINTANCE') {
      
      Acquaintance += arr[i][0] * 100;
      
    } else if (arr[i][1].toUpperCase() === 'FRIEND'){
      
      Friend += arr[i][0] * 50;
      
    } else {
      
      OtherPeoples += arr[i][0] * 125;
      
    }
    
  }
  
  return CloseFriend + Friend + Acquaintance + OtherPeoples;
}
//41 from infinity...