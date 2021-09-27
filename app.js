document.addEventListener('DOMContentLoaded', () => {

    //array of card options using name and relative path for each object in the array
    const cardArray = [
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.png'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'cherry',
            img: 'images/cherry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'sushi',
            img: 'images/sushi.png'
        },
        {
            name: 'sushi',
            img: 'images/sushi.png'
        }
    ];
    // randomize the cardArray
    cardArray.sort(() => 0.5 - Math.random());
    //using querySelector pick up the element with the class name of grid from the HTML document
    // and define it as a grid for JS
    const grid = document.querySelector('.grid');
    //
    const resultDisplay = document.querySelector('#result');
    //create an empty array of cards chosen
    let cardsChosen = [];
    let cardsChosenId = [];
    //create an empty array for cards won
    let cardsWon = [];

    // create the gameboard
    function createGameBoard() {
        for (let i = 0; i < cardArray.length; i++) { // using a for loop, loop over the cardArray
            let card = document.createElement('img') // for each card create an img element & call the element 'card'
            card.setAttribute('src', 'images/blank.png') // set each card as an attribute, link to image and relative path for blank.png
            card.setAttribute('data-id', i) // give each card a data id & loop over each to give them a value 0 to 11 (because we have 12 images)
            card.addEventListener('click', flipCard) // create an event listener for if the card is clicked to call the function flipcard
            grid.appendChild(card) // put the cards into the div with the class name of grid using append Child
        }
    }
    
    //check for matches 
    function checkForMatch() {
        let cards = document.querySelectorAll('img'); 
        const optionOneId = cardsChosenId[0]; //I want the first value in my array and assign it to optionOneId
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("Match!");
            cards[optionOneId].setAttribute('src', 'images/white.png'); // turns the chosen squares white to continue the game
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else { // if the cards don't match, flip them back over to be played again
            cards[optionOneId].setAttribute('src', 'images/blank.png'); // sets the image back to the initial background square
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert("Try again!");
        }
        // clear the cardsChosen array and cardsChosenId array so we can flip again
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congrats! You found them all!";
        }
    }


    //flip your card 
    function flipCard() {
        let cardId = this.getAttribute('data-id'); // get the card based on the data id attribute from the creategameboard function
        cardsChosen.push(cardArray[cardId].name); // use push to push the cards from the cardArray based on the cardId
        cardsChosenId.push(cardId); // use push to push the cardId from the cardArray to the empty array
        this.setAttribute('src', cardArray[cardId].img); //flipcard is already in a function, we technically already have a card picked
        // this.setAttribute will let us add an image to the square based on the cardId that it holds
        if (cardsChosen.length === 2) { // only want 2 cards chosen in the array
            setTimeout(checkForMatch, 500) // check if cards are matched after 500 milliseconds
        }
    }

    createGameBoard();



});