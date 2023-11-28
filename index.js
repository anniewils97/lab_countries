const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/" + countryName);
    const data = await response.json();
    console.log(data);
}
getCountryByName("cameroon");