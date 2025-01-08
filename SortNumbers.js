function solution(nums){
  if (nums == null) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let temp = nums[i];
      let temp2 = nums[j];
      if (nums[i] < nums[j]) {
        nums[i] = temp2;
        nums[j] = temp;
      }
    }
  }
  return nums;
}