function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

  const month = birthday.getMonth();
  const date = birthday.getDate().toString();
  
  return `The ${m[month]} ${d[date[date.length - 1]]}`;
}
//57 from infinity...