function dataReverse(data) {
  let answer = [];
  let res = [];
  
  for (let j = 0; j < data.length; j += 8) {
    res.push(data.slice(j, j + 8));
  }

  res = res.reverse();
  
  res.forEach((el) =>{
    answer.push(...el);
  });
  
  return answer;
}
//37 from infinity...
