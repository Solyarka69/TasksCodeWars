function myLanguages(results) {
  let answer = [];
  let res = Object.entries(results);
  res.sort(([, a], [, b]) => b - a);
  for (let i = 0; i < res.length; i++) {
    res[i][1] >= 60 ? answer.push(res[i][0]) : false;
  }
  return answer;
}
//26 from infinity...