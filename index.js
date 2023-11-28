const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/" + countryName);
    const data = await response.json();
    console.log(data);


    data.forEach((country) => {
        const countryContainer = document.createElement("div");

       // Display country name
       const nameCountry = document.createElement("h2");
       nameCountry.innerText = `Country: ${country.name.common}`;
       countryContainer.appendChild(nameCountry);

        // Display capital
        const countryCapital = document.createElement("p");
        countryCapital.innerText = `Capital: ${country.capital}`;
        countryContainer.appendChild(countryCapital);

        // Display languages
        const countryLanguages = document.createElement("p");
        countryLanguages.innerText = `Languages: ${Object.values(country.languages).join(', ')}`;
        countryContainer.appendChild(countryLanguages);

        // Display population
        const countryPopulation = document.createElement("p");
        countryPopulation.innerText = `Population: ${country.population}`;
        countryContainer.appendChild(countryPopulation);

        // Append the country container to the document
        document.getElementById("countries").appendChild(countryContainer);
    });

}
getCountryByName("cameroon");