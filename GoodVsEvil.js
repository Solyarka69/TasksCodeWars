function goodVsEvil(good, evil){
  let goods = good.split(' ');
  let evils = evil.split(' ');
  let worthGoods = [1, 2, 3, 3, 4, 10]
  let worthEvils = [1, 2, 2, 2, 3, 5, 10]
  let sumGoodsPoints = 0;
  let sumEvilsPoints = 0;
  
  goods = goods.map((el) => +el);
  evils = evils.map((el) => +el);
  
  for (let i = 0; i < goods.length; i++) {
    sumGoodsPoints += goods[i] * worthGoods[i];
  }
  
  for (let j = 0; j < evils.length; j++) {
    sumEvilsPoints += evils[j] * worthEvils[j];
  }
  
  if (sumGoodsPoints === sumEvilsPoints) 
    return 'Battle Result: No victor on this battle field';
  
  return sumGoodsPoints > sumEvilsPoints ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good';
}
//40 from infinity...
