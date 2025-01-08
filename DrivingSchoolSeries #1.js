function passed (list) { 
  let counter = 0;
  let summ = 0;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i] <= 18) {
      counter += 1;
      summ += list[i];
    }
  }

return summ != 0 ? Math.round(summ / counter) : 'No pass scores registered.';

} 