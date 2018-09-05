/*
 * Create a list that holds all of your cards
 */

var cards = ["diamond","paper-plane-o","bolt","leaf","bicycle","cube","anchor"]



var newCards;

var openCards = [];

// function flip(e) {
//     e.target.classList.toggle("show");
//     e.target.classList.toggle("open");
//     openCards.push(e);
//     checkEquality();
// }

// function checkEquality() {
//     if (openCards.length > 1) {
//         console.log(openCards[0].classList);
//         if (openCards[0].classList === openCards[1].classList) {
//             alert("hey");
//         }

//     }
// // }

// for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("click", flip)
// }
newCards = shuffle(cards);
console.log(cards);
console.log(newCards);


for (var r = 0; r < cards.length; r++) {
    console.log(cards[r].innerHTML)
}
console.log("-----------------")
for (var t = 0; t < newCards.length; t++) {
    console.log(newCards[t].innerHTML)
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
