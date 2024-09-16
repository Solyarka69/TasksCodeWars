var whatTimeIsIt = function(angle) {
  if (angle === 0 || angle === 360) return '12:00';
  
  let hours = Math.floor(angle / 30);
  let minutes = Math.floor((angle - hours * 30) * 2);

  if (hours === 0 && minutes.toString().length === 1) {
    return `12:0${minutes}`;
  } else if (hours === 0 && minutes.toString().length === 2) {
    return `12:${minutes}`;
  }
  
  if (hours.toString().length === 1 && minutes.toString().length === 1) {
    return `0${hours}:0${minutes}`;
  } else if (hours.toString().length === 1 && minutes.toString().length === 2) {
      return `0${hours}:${minutes}`;
  } else if (hours.toString().length === 2 && minutes.toString().length === 1) {
      return `${hours}:0${minutes}`;
  } else {
      return `${hours}:${minutes}`;
  }
}
//55 from infinity...