function shortenToDate(longDate) {
  let indexSymbol = longDate.indexOf(',');
  return longDate.slice(0, indexSymbol);
}