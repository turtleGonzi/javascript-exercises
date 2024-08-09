const convertToCelsius = function(fahren) {
  let celsius = (fahren - 32) * (5 / 9);
  return (Number.isInteger(celsius)) ? celsius : Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahren = (celsius * (9 / 5) + 32)
  return (Number.isInteger(fahren)) ? fahren : Number(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

