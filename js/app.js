/*
 * Create a list that holds all of your cards
 */

var cards = ["diamond","paper-plane-o","bomb","bolt","leaf","bicycle","cube","anchor","diamond","paper-plane-o","bolt","leaf","bicycle","cube","anchor","bomb"];

var newCards;

var openCards = [];


addingCards(cards);
function addingCards(cardsList)
{
    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
    for (let index = 0; index < cardsList.length; index++) {

        var card= document.createElement("li");
        card.classList.add("card");

        cardIcon=document.createElement("li");
        cardIcon.classList.add("fa","fa-"+cardsList[index])
        card.appendChild(cardIcon);
        card.addEventListener("click", flip)

        fragment.appendChild(card);

    }
    document.querySelector(".deck").appendChild(fragment);
}
 function flip(e) {

     e.target.classList.toggle("show");
     e.target.classList.toggle("open");

     openCards.push(e);

     if (openCards.length > 1)
     {
     checkEquality();
     }
 }

 function flipBack(e) {

    e.target.classList.toggle("show");
    e.target.classList.toggle("open");
    e.target.classList.toggle("not-match");
    openCards=[];

}

 function checkEquality() {

    var firstCard=openCards[0];
    var secondCard=openCards[1];

         if (firstCard.target.childNodes[0].classList[1] === secondCard.target.childNodes[0].classList[1])
         {
            firstCard.target.classList.add('match');
             secondCard.target.classList.add('match');
             openCards=[];
         }

         else
         {
            firstCard.target.classList.add('not-match');
            secondCard.target.classList.add('not-match');
            flipBack(firstCard);
            flipBack(secondCard);


         }




 }

// for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("click", flip)
// }
console.log(cards);
newCards = shuffle(cards);

console.log(newCards);
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
