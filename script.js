const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


let apiQuotes = [];

// show new Quotes

function newQuotes() {
    // pick a random quotes from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author field is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = "unknown"
    }
    else {
        authorText.textContent = quote.author;
    }

    // check quote length to determining styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get Quotes from API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }
    catch(error) {
        // catch error here
    }
}

// Tweet Quote

function tweetQuote() {
    const twitterurl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterurl, '_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuotes)
twitterBtn.addEventListener('click',tweetQuote)

// onload
getQuotes()