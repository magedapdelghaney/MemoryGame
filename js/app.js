/*
 * Create a list that holds all of your cards
 */

//  define our init card list with all avaliable items 

let cards = ["diamond", "paper-plane-o", "bomb", "bolt", "leaf", "bicycle", "cube",
    "anchor", "diamond", "paper-plane-o", "bolt", "leaf", "bicycle", "cube", "anchor", "bomb"];
let openCards = [];
let matches = 0;
let movesCount = 0;
let starsCount = 3;

/*start Game */

initGame();


function initGame() {

    let cardsList = shuffle(cards);
    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>
    for (let index = 0; index < cardsList.length; index++) {

        var card = document.createElement("li");
        card.classList.add("card");

        cardIcon = document.createElement("li");
        cardIcon.classList.add("fa", "fa-" + cardsList[index])
        card.appendChild(cardIcon);
        card.addEventListener("click", flip)

        fragment.appendChild(card);

    }
    document.querySelector(".deck").appendChild(fragment);
}

// update user moves
function updateMovesCount() {
    movesCount++;
    document.querySelector('.moves').textContent = movesCount;
    return movesCount;
}

function resetMoves() {
    movesCount = 0;
    document.querySelector('.moves').textContent = movesCount;
}
/* reset stars Count for each game start */

function resetStars(){
    starsCount = 3;
    document.getElementById('starsList').innerHTML = '';
    for (let i = 0; i < 3; i++) {
       let star=  document.createElement("i");
       let starCont=  document.createElement("li");
       star.classList.add("fa","fa-star");
       starCont.appendChild(star);
       document.getElementById('starsList').appendChild(starCont);
    }

}

/* flipping Card (open and close) */

function flip(e) {

    let newMoveCount = updateMovesCount();
    updateStarsCount(newMoveCount);
    e.target.classList.toggle("show");
    e.target.classList.toggle("open");
    e.target.removeEventListener('click', flip);
    openCards.push(e);

    if (openCards.length > 1) {
        checkEquality();
    }
}

function flipBack(e) {

    e.target.classList.toggle("show");
    e.target.classList.toggle("open");
    e.target.classList.toggle("not-match");
    e.target.classList.toggle("shake");
    e.target.addEventListener('click', flip);


}

/* checking success matching each two identical shapes */

function matchingSuccess(firstCard, secondCard) {
    firstCard.target.classList.add('match', 'success-shake');
    secondCard.target.classList.add('match', 'success-shake');
    openCards = [];
    matches++;
    checkWinning();

}

function matchingFaild(firstCard, secondCard) {
    firstCard.target.classList.add('not-match', 'shake');
    secondCard.target.classList.add('not-match', 'shake');
    setTimeout(function () { flipBack(firstCard) }, 1000);
    setTimeout(function () { flipBack(secondCard) }, 1000);
    openCards = [];

}

function checkEquality() {

    var firstCard = openCards[0];
    var secondCard = openCards[1];

    if (firstCard.target.childNodes[0].classList[1] === secondCard.target.childNodes[0].classList[1]) {
        matchingSuccess(firstCard, secondCard);
    }

    else {
        matchingFaild(firstCard, secondCard);
    }
}

// update Rating score 

function updateStarsCount(moves) {

    switch (moves) {
        case 20:

            starsCount = 2;
            removeStar();
            break;
        case 40:

            starsCount = 1;
            removeStar();
            break;
        case 60:

            starsCount = 0;
            removeStar();
            break;

    }

}
function removeStar() {
    document.getElementById("starsList").children[0].remove();
}

//check if user match all available cards shapes

function checkWinning() {
 
    if (matches === (cards.length/2))
     {
        document.querySelector(".winning-board").classList.add("winning-show");
        document.getElementById('moves').textContent = movesCount;
        document.getElementById('starsResult').textContent = starsCount;
        
    }

}

//reset all game scores and state

function resetGame() {
    document.querySelector(".deck").innerHTML = "";
    initGame();
    resetMoves();
    resetStars();
    openCards = [];
    matches = 0;
    document.querySelector(".winning-board").classList.remove('winning-show');

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
