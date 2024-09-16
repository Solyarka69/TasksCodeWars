function countSheeps(sheep) {
  let counter = 0;
  sheep.forEach((el) => {
    if (el === true) {
      counter += 1;
    }
  });
  return counter;
}
//7 from infinity...