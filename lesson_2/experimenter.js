function loanCalc(loanAmount, apr, loanDuration) {
  monthlyAPR = apr / 12;
  let monthlyPayment =
    loanAmount * (monthlyAPR / (1 - Math.pow(1 + monthlyAPR, -loanDuration)));
  return monthlyPayment;
}

console.log(loanCalc(1000, .05, 12));
