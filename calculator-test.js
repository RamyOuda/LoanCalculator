it("should calculate the monthly rate correctly", function () {
  values = { amount: 10000, years: 5, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual(`212.47`);

  values = { amount: 25000, years: 3, rate: 15 };
  expect(calculateMonthlyPayment(values)).toEqual(`866.63`);
});

it("should return a result with 2 decimal places", function () {
  values = { amount: 10043, years: 8, rate: 5.8 };
  expect(calculateMonthlyPayment(values)).toEqual(`131.00`);

  values = { amount: 0, years: 5, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual(`0.00`);
});

/// etc

it(`should return error string if years/rate is invalid`, function () {
  values = { amount: 10000, years: 0, rate: 10 };
  expect(calculateMonthlyPayment(values)).toEqual(`Invalid number of years!`);

  values = { amount: 10000, years: 10, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual(`Invalid yearly rate!`);
});
