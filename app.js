let currencyOne = document.getElementById("currency_one");
let amountOne = document.getElementById("amount_one");

let currencyTwo = document.getElementById("currency_two");
let amountTwo = document.getElementById("amount_two");

let rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// hooking up eventlisteners to dom elements
currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);

// getting exchange rate data from 3td party API
function calculate() {
  const valueOne = currencyOne.value;
  const valueTwo = currencyTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${valueOne}`)
    .then(res => res.json())
    .then(({ rates }) => {
      amountTwo.innerText = (rates[valueTwo] * amountOne.value).toFixed(4);
      rate.innerText = `${rates[valueTwo].toFixed(4)} `;
    });
}

swap.addEventListener("click", function() {
  let temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
