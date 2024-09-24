function countBy(x, n) {
  let z = [];
  let i = 1;
  while (z.length < n) {
    if (i % x === 0) z.push(i);
    i += 1;
  }
  return z;
}