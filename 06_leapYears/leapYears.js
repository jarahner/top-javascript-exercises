const leapYears = function (year) {
  if (year % 400 && !(year % 100)) {
    return false;
  } else if (year % 4) return false;
  else return true;
};

// Do not edit below this line
module.exports = leapYears;
