function possiblePositions(str) {
  let alphabit = 'abcdefgh';
  let firstPoseChar = alphabit[str.indexOf(str[0]) + 1];
  let firstPoseNum = Number(str[1]) + 2;
  let firstPose = `${firstPoseChar}${firstPoseNum}`;
  
  let secondPoseChar = alphabit[str.indexOf(str[0]) + 2];
  let secondPoseNum = Number(str[1]) + 1;
  let secondPose = `${secondPoseChar}${secondPoseNum}`;
  
  return [firstPose, secondPose];
}