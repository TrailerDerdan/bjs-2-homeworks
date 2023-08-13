'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
  return arr;
}
let a = 1;
let b = 2;
let c = 1;
let roots = solveEquation(a, b, c);
console.log('Корни уравнения: ' + roots);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== 'number' ||
    typeof contribution !== 'number' ||
    typeof amount !== 'number' ||
    typeof countMonths !== 'number'
  ) {
    return false;
  }

  let monthlyPercent = percent / 100 / 12;
  let loanAmount = amount - contribution;
  let monthlyPayment =
    loanAmount *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  let totalPayment = monthlyPayment * countMonths;
  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}
let percent = 10;
let contribution = 0;
let amount = 50000;
let countMonths = 12;

let totalPayment = calculateTotalMortgage(
  percent,
  contribution,
  amount,
  countMonths
);
console.log(totalPayment);
