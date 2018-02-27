var cards = ["queen", "queen", "king", "king"];
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
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
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
