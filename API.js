const BASE_URL = "https://api.frankfurter.app/latest?";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    // Add event listener to update flag on change
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update the flag image based on the selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = "https://flagsapi.com/${countryCode}/flat/64.png";
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Main logic for fetching and displaying the exchange rate
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // Construct the correct URL for the API call
    const URL = `${BASE_URL}from=${fromCurr.value}&to=${toCurr.value}`;
    
    // Fetch the data and handle errors
    try {
        let response = await fetch(URL);
        
        let data = await response.json();
        let rate = data.rates[toCurr.value];

        let finalAmount = amtVal * rate;
        msg.innerText =` ${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate. Please try again.";
        console.error("Fetch error: ", error);
    }
});

// Initial call to display the default rate when the page loads
window.addEventListener("load", () => {
    btn.click(); // Simulate a click to get the initial rate
});