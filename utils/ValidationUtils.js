const checkIsNumber = (input) => {
  const check = /^[0-9]+$/;
  return check.test(input);
};

const checkIsKorean = (input) => {
  const check = /^[ㄱ-ㅎ|가-힣]+$/;
  return check.test(input);
};

const checkIncludeHypen = (input) => input.includes('-');

const checkIsInRange = (min, max, input) => input >= min && input <= max;

export { checkIsNumber, checkIsKorean, checkIncludeHypen, checkIsInRange };
