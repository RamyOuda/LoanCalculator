window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// --------------------

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 5000, years: 3, rate: 15 };

  document.querySelector(`#loan-amount`).value = values.amount;
  document.querySelector(`#loan-years`).value = values.years;
  document.querySelector(`#loan-rate`).value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if (!values.years) return `Invalid number of years!`;
  if (!values.rate) return `Invalid yearly rate!`;

  let monthlyRate = values.rate / 100 / 12;
  let numerator = values.amount * monthlyRate;
  let denominator = 1 - Math.pow(1 + monthlyRate, -(values.years * 12));

  let result = (numerator / denominator).toFixed(2);

  return result;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector(`#monthly-payment`).innerText = `$` + monthly;
}
