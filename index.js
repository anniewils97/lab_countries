async function getAllCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        displayError("Error fetching countries");
    }
}

async function getCountryByName(countryName) {
    try {
        const response = await fetch("https://restcountries.com/v3.1/name/" + countryName);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        displayError("Error fetching the country");
    }
}

function displayCountries(countries) {
    countries.forEach((country) => {
        const countryContainer = createCountryContainer(country);
        document.getElementById("countries").appendChild(countryContainer);
    });
}

function createCountryContainer(country) {
    const countryContainer = document.createElement("div");

    const nameCountry = document.createElement("h2");
    nameCountry.innerText = `Country: ${country.name.common}`;
    countryContainer.appendChild(nameCountry);

    const countryCapital = document.createElement("p");
    countryCapital.innerText = `Capital: ${country.capital}`;
    countryContainer.appendChild(countryCapital);

    const countryLanguages = document.createElement("p");
    countryLanguages.innerText = `Languages: ${Object.values(country.languages).join(', ')}`;
    countryContainer.appendChild(countryLanguages);

    const countryPopulation = document.createElement("p");
    countryPopulation.innerText = `Population: ${country.population}`;
    countryContainer.appendChild(countryPopulation);

    return countryContainer;
}

function displayError(message) {
    const errorContainer = document.createElement("div");
    errorContainer.style.color = "red";
    errorContainer.innerText = message;
    document.getElementById("countries").appendChild(errorContainer);
}

// error should show
// getCountryByName("Hawaii");

//testing functions

getCountryByName("Indonesia");
// getAllCountries();