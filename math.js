function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

const OPERATIONS = {
  sum: "+",
  substract: "-",
  multiply: "*",
  division: "/",
};

function calculate({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;

    case OPERATIONS.substract:
      result = substract(a, b);
      break;

    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;

    case OPERATIONS.division:
      result = division(a, b);
      break;

    default:
      break;
  }

  return result; // Повернення результату обчислення
}
