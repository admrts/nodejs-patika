const circleArea = (r) => {
  return Math.round(Math.PI * r * r);
};

const circleCircumference = (r) => {
  return Math.round(2 * Math.PI * r);
};

module.exports = { circleArea, circleCircumference };
