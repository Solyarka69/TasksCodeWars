function lateRide(n) {
  let time = '';
  let hours = 0;
  let minutes = 0;
  
  hours = Math.floor(n / 60);
  minutes = n % 60;
  time = hours.toString() + minutes.toString();
  
  time = time.split('');
  time = time.map((el) => parseInt(el));
  
  return time.reduce((a, b) => a + b);
}
//30 from infinity...