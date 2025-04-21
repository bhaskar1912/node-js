function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("b should be greater or small than 0");
  }
  return a / b;
}

module.exports = {
  sum,
  sub,
  divide,
};
