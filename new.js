async function getCountries(){
    let response=await fetch("https://restcountries.com/v3.1/all")
    let countries= await response.json()
    console.log(countries)
}
getCountries();