var cards = [
  {rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
  {rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamnds.png"
},
  {rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
  {rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function(){
  {
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("YOU HAVE FOUND A MATCH!");
    } else {
      alert("Sorry, try again");
    }
  };
};

var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  console.log("User flipped " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  if(cardsInPlay.length === 2){
    checkForMatch();
  };
};

flipCard(0);
flipCard(2);



// console.log("User flipped " + cardOne + " and " + cardTwo);

// var cardOne = "queen",
//     cardTwo = "queen",
//     cardThree = "king",
//     cardFour = "king";
