var cards= [];

var sum = 0;

var hasBlackjack=false;
var isAlive= false;

var message= "";

var messageEl=document.getElementById("message-el");

// var sumEl=document.getElementById("sum-el");

var sumEl=document.querySelector("#sum-el");

var cardsEl= document.getElementById("cards-el");

// var playerName = "User1";
// var playerChips = "$" + 123;

var player = {
  name: "User1", 
  chips: 123
}

var playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +": " + "$" + player.chips;;

function getRandomCard(){
  // return Math.floor(Math.random()*(max-min+1))+min;
  var randomNumber= Math.floor(Math.random()*13)+1;
  if (randomNumber>10){
    randomNumber=10;
  }
  else if (randomNumber===1){
    randomNumber=11;
  }
  return randomNumber;
}

function startGame(){
 cards=[];
 sum=0;
  isAlive= true;
  let firstCard= getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard+ secondCard;
  cards.push(firstCard);
  cards.push(secondCard);
  renderGame();
 
}

function renderGame(){
  cardsEl.textContent= "Cards: ";
  for (let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if(sum < 21){
    message="Do you want to draw a new card?";
    hasBlackjack=false;
    } else if (sum===21){
      message="You've got BlackJack!";
      isAlive=false;
      hasBlackjack=true;
    } else
    {message="You lost";
      isAlive=false;
      hasBlackjack=false;
    }
    
    // messageEl.innerHTML=message;
    messageEl.textContent=message;
}

function newCard(){
  if (isAlive===true && hasBlackjack===false){
    var newCard = getRandomCard();
    sum +=newCard;
    cards.push(newCard);
    renderGame();
  }
 }