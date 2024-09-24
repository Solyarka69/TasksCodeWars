// write the function isAnagram
var isAnagram = function(test, original) {
let testArr = test.split('');
let originalArr = original.split('');

testArr = testArr.map((el) => el.toUpperCase());
originalArr = originalArr.map((el2) => el2.toUpperCase());

testArr = testArr.sort();
originalArr = originalArr.sort();

let count = 0;

for (let i = 0; i < testArr.length; i++) {
if (testArr[i] === originalArr[i]) count += 1;
}

return count === testArr.length && count === originalArr.length;
};