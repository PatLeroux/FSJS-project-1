/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Patrick Leroux
******************************************/

// Declare needed variables.
let quotes;
let quoteIndex;
let randomQuote;
let backgroundColors;
let backgroundColor;
let colorCode;
let colorIndex;
let randomColor;
let html;
let intervalID;

//Build the array of quotes objects with the "tag" added element.
quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
  },
  {
    quote: "Teaching yoga itself is great karma yoga, because it reconnects people to the source.",
    source: "Amit Ray",
    citation: "The Science of Well-Being",
    year: 2016
  },
  {
    quote: "Sometimes success is the source of your happiness, but sometimes happiness can be the source of your success.",
    source: "Richie Norton",
    year: 2015
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    citation: "The Importance of Being Earnest",
    year: 1895,
    tag: "Inspirational"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    tag: "Inspirational"
  }
];


// Generate a random number and return it.
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Function the implement the random background color
// I first use an array of colors and pick one randomly which was my own code.
// But wanted to go further and i was inspired by a Stackoverflow "Random color generator".
// Not sure from who it was...
function getRandomBackgroudColor() {
  // String letters that be use to generate a color.
  colorCode = "0123456789ABCDEF";

  // Initilize the color.
  backgroundColor = "#";

  // Pick 6 letters from the "colorCode" randomly.
  for(var index = 0; index < 6; index++) {
    backgroundColor += colorCode[getRandomNumber(16)];
  }
  return(backgroundColor);
}

// Get and return a random quote object.
function getRandomQuote() {
  quoteIndex  = getRandomNumber(quotes.length);
  return quotes[quoteIndex];
}

// Set the background color of the page and the loadQuote button.
function setBackgroundColor() {
  randomColor = getRandomBackgroudColor();

  // Set the background color of the page (body tag) to the random color.
  document.getElementsByTagName("body")[0].style.backgroundColor = randomColor;
  // Set the background color of the "loadQuote" button to the random color.
  document.getElementById("loadQuote").style.backgroundColor = randomColor;
}

// Create the html string with the random quote elements.
function buildHtml() {
  // 15000 milliseconds delay to implement the auto-refresh of the quote feature.
  window.setTimeout( "buildHtml()", 15000);

  // Chose a quate randomly.
  randomQuote = getRandomQuote();

  // Clear the html variable with the start of the "quote-box" html elements.
  html = '<div id="quote-box">';

  // Set the quote and source info
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  // Check if there is a citation and append it to the html string variable.
  if (randomQuote.citation){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // Check if there is a year and append it to the html string variable.
  if (randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  // Check if there is a year and append it to the html string variable.
  if (randomQuote.tag){
    html += '<span class="tag">' + randomQuote.tag + '</span></p>';
  }

  // Close the "quote-box" div.
  html += '</div>';

  // Modify the content of the "quote-box" div.
  document.getElementById("quote-box").innerHTML = html;
}
function doPrintQuote() {
  intervalID = setInterval(printQuote, 7500);

}
// Build an html string with the quote object and print it in the "quote-box" div.
function printQuote() {
  // Set the background color of the page (body tag) and
  // the "loadQuote" button to the random color.
  setBackgroundColor();

  //Set the random quote to the "quote-box" div.
  buildHtml();
}

// Listener for the click action that will print another quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
