let originalCurrency=document.querySelector("#input-original-currency")
let convertedCurrency=document.querySelector("#input-converted-currency")
let currencyAmount=document.querySelector("#input-amount")
let inputBtn=document.querySelector("#input-btn")
let outputText=document.querySelector("#output-text")

inputBtn.addEventListener("click",onClickHandler)


function urlConstructer(currency){
    let api="https://v6.exchangerate-api.com/v6/"
    let apiKey="664f63f076e4deeefa1aacdf"
    let apiMiddle="/latest/"
    let url=api+apiKey+apiMiddle+currency
    return url
}

function onClickHandler(){

    let inputCurrency=originalCurrency.value
    

    fetch(urlConstructer(inputCurrency))
    .then(response=>response.json())
    .then(json=>{
       let amount=currencyAmount.value
       let converted=convertedCurrency.value
       let exchangeRate=json.conversion_rates[converted]*amount
       
       outputText.innerText=exchangeRate
    })
}