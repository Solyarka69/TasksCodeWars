function heron(a, b, c) {
  let s = (a + b + c) / 2;
  let res = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return res;
}