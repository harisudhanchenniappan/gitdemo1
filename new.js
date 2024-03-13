async function getCountries(){
    let response=await fetch("https://restcountries.com/v3.1/all")
    let countries= await response.json()
    console.log(countries)
    let countryContainer=document.getElementById('countries')
    countries.forEach(country=>{
        let card=document.createElement('div')
        card.classList.add('col-lg-4','col-md-6','col-sm-12')

        let innerCard=document.createElement('div')
        innerCard.classList.add('card','mb-3')

        let cardHeader=document.createElement('div')
        cardHeader.classList.add('card-header')
        cardHeader.textContent=country.name.common

        let cardBody=document.createElement('div')
        cardBody.classList.add('card-body')

        let image=document.createElement('img')
        image.classList.add('image')
        image.setAttribute('src',country.flags.svg)

        let capital=document.createElement('p')
        capital.classList.add('capital')
        capital.textContent=`capital: ${country.capital}`

        let region=document.createElement('p')
        region.classList.add('region')
        region.textContent=`region: ${country.region}`

        let code=document.createElement('p')
        code.classList.add('code')
        code.textContent=`code: ${country.cca2}`

        let btn=document.createElement('button')
        btn.classList.add('btn','btn-secondary','btn-block','text-center')
        btn.textContent='click for Weather'

        btn.addEventListener('click',async ()=>{
            let lat=country.latlng[0]
            let lon=country.latlng[1]
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b2572b34fbd1c2f5540d7b5b1f56defa`)
            .then(response=>response.json())
            .then(climate=>{
                btn.textContent=climate.weather[0].description
            })
        })

        cardBody.append(image,capital,region,code,btn)
        innerCard.append(cardHeader,cardBody)
        card.append(innerCard)
        countryContainer.append(card)
    })
}
getCountries();