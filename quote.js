// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quoteHolder p');
let author = document.querySelector('.author');

const quotes = [{
    quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde'
}, {
    quote: 'It is never too late to be what you might have been.',
    author: 'George Elliot'
}, {
    quote: 'Pain is inevitable. Suffering is optional.',
    author: 'Haruki Murakami'
}, {
    quote: 'Be kind, for everyone you meet is fighting a hard battle.',
    author: 'Plato'
}, {
    quote: 'Let me live, love, and say it well in good sentences.',
    author: 'Sylvia Plath'
}, {
    quote: 'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.',
    author: 'Stephen King'
}, {
    quote: 'Life is tough my darling, but so are you.',
    author: 'Stephanie Bennet Henry'
}, {
    quote: 'The strongest principle of growth lies in the human choice.',
    author: 'George Elliot'
}, {
    quote: 'We are all broken, that is how the light gets in.',
    author: 'Earnest Hemingway'
}, {
    quote: 'Self-awareness and self-love matters. Who we are is how we lead.',
    author: 'Brene Brene'
}
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})