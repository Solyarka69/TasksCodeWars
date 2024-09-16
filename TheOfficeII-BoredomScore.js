function boredom(staff){
  let summScore = 0;
  
  for (var key in staff) {
    switch (staff[key]) {
        case 'accounts':
          summScore += 1;
          break;
        case 'finance':
          summScore += 2;
          break;
        case 'canteen':
          summScore += 10;
          break;
        case 'regulation':
          summScore += 3;
          break;
        case 'trading':
          summScore += 6;
          break;
        case 'change':
          summScore += 6;
          break;
        case 'IS':
          summScore += 8;
          break;
        case 'retail':
          summScore += 5;
          break;
        case 'cleaning':
          summScore += 4;
          break;
        case 'pissing about':
          summScore += 25;
          break;
    }
  }
  if (summScore <= 80) {
    return 'kill me now';
  } else if (summScore < 100 && summScore > 80) {
      return 'i can handle this';
  } else {
      return 'party time!!';
  }
}
//53 from infinity...