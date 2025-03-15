const convertToCelsius = function(f) {
  if(f-32 === 0) return 0;
  return Number(((f-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(c) {
  if(c===32) return 0;

  return Number((((9/5)*(c)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
