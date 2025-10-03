document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("converter-form");
  const amountInput = document.getElementById("amount");
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");
  const resultDisplay = document.getElementById("result");

  const currencies = ["USD", "INR", "EUR", "JPY", "GBP"];

  // Populate dropdowns
  currencies.forEach(currency => {
    const optionFrom = new Option(currency, currency);
    const optionTo = new Option(currency, currency);
    fromSelect.add(optionFrom);
    toSelect.add(optionTo);
  });

  fromSelect.value = "USD";
  toSelect.value = "INR";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (isNaN(amount) || amount <= 0) {
      resultDisplay.textContent = "Please enter a valid amount.";
      return;
    }

    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await response.json();

      if (!data.rates[to]) {
        resultDisplay.textContent =`Exchange rate for ${to} not found.`;
        return;
      }

      const rate = data.rates[to];
      const converted = (amount * rate).toFixed(2);

      resultDisplay.textContent =` ${amount} ${from} = ${converted} ${to}`;
    } catch (error) {
      resultDisplay.textContent = "Error fetching exchange rate. Please try again.";
      console.error("Fetch error:", error);
    }
  });
});
