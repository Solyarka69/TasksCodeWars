//return price without vat
function excludingVatPrice(price){
  if (price === null) return -1;
  
  let res = price / (1 + 0.15);
  
  return parseFloat(res.toFixed(2));
}