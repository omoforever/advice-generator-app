let currentQuote = {
    id: `157`,
    quote: `When something goes wrong in life, just shout "plot twist!" and carry on.`
}

let quoteIDElement = document.getElementById("advice-number");
let quoteAdviceElement = document.getElementById("advice-quote");

quoteIDElement.innerText = `Advice # ${currentQuote.id}`;
quoteAdviceElement.innerText = currentQuote.quote;

function getData() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(quoteObject => updateCurrentQuote(quoteObject.slip))
}

function updateCurrentQuote(quote) {
    currentQuote.id = quote.id;
    currentQuote.quote = quote.advice;
    quoteIDElement.innerText = `Advice # ${currentQuote.id}`;
    quoteAdviceElement.innerText = currentQuote.quote;
}

