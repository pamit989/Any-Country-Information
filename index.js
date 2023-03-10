"use Strict";

const searchBtn = document.querySelector(".searchBTN");
const countryInp = document.getElementById("searchINP");

searchBtn.addEventListener("click", () => {
  const countryName = countryInp.value;

  const reqURL = `https://restcountries.com/v3.1/name/${countryName}`;
  console.log(reqURL);

  fetch(reqURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${Object.keys(data[0].currencies)}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)}</span>
            </div>
        </div>
      `;
    });
});
