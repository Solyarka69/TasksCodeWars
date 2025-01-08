function solve(st,a,b){
 let firstValue = st.slice(0, a);
//  console.log(firstValue)
 let secondValue = st.slice(b + 1);
//  console.log(secondValue);
  
 let middleValue = st.slice(a, b + 1)
//  console.log(middleValue);
  
 return firstValue + middleValue.split('').reverse().join('') + secondValue;
 
}
  