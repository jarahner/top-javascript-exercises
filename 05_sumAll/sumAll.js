const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";

  sum = 0;

  a = Math.min(num1, num2);
  b = Math.max(num1, num2);

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
