const quotes = [
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        author: "Bernard M. Baruch"
    },
    {
        quote: "We must not allow other people’s limited perceptions to define us.",
        author: "Virginia Satir"
    },
    {
        quote: "Everything has beauty, but not everyone can see.",
        author: "Confucius"
    },
    {
        quote: "Believe you can and you’re halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Imagination is everything. It is the preview of life’s coming attractions.",
        author: "Albert Einstein"
    },
    {
        quote: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Edison"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;