document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort( () => 0.5 - Math.random() )

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result');
  var chosenCards = [];
  var chosenCardsIds = [];
  cardsWon = [];

  // create the board
  function createBoard() {
    for(let i = 0; i < cardArray.length;i++){
      var card = document.createElement('img');
      card.setAttribute('src','images/blank.png');
      card.setAttribute('data-id',i);
      card.addEventListener('click',flipcard);
      grid.appendChild(card);
      
    }
  }
  
  // check for matches
  function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    if(chosenCards[0] === chosenCards[1])
    {
        alert("you found a match");
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cardsWon.push(chosenCards)

    } else {
      cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
      alert("sorry, please try agian");
      }
      chosenCards = [];
      chosenCardsIds = [];
      resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardArray.length / 2)
      {
        resultDisplay.textContent = 'Congrts !';
      }

  }
    // flip cards
  function flipcard() {
    var cardId = this.getAttribute('data-id')
    chosenCards.push(cardArray[cardId].name)
    chosenCardsIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(chosenCards.length === 2){
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();

})

