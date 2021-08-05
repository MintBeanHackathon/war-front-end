import Deck from './assets/scripts/Deck.js';
import {handlePlayAgainButton, modalPopup, handleExitGameButton, handleStartGameButton, handleInstructionsButton, handleAboutButton} from './assets/scripts/ui.js';
const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const target = document.querySelector('.section_game')
const text = document.querySelector(".text");

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7":7, 
    "8":8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q":12,
    "K": 13,
    "A":14  
  }

let comWarDeck = [];
let playerWarDeck = [];
let playerDeck, computerDeck, inRound, stop

$(".startButton").on('click', handleStartGameButton)

startGame();


target.addEventListener("click", () => {
    text.innerText = "Click Anywhere to Play"
   
    if (stop) {
      startGame()
      return
    }
    if (inRound) {
      cleanBeforeRound()
    } else {
      flipCards()
    }
  })

function startGame() {
  const deck = new Deck()
  deck.shuffle()
  
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inRound = false
  stop = false
  cleanBeforeRound()
}
  
function cleanBeforeRound() {
    inRound = false
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    updateDeckCount()
}
  
  function flipCards() {
    inRound = true
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()
  
    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())
   
    if (isRoundWinner(playerCard, computerCard) === 'win') {
      playerDeck.push(playerCard)
      playerDeck.push(computerCard)

        if(comWarDeck.length > 0 && playerWarDeck.length > 0) {
          text.innerText = `You got ${comWarDeck.length + 1} cards`
            let toCon = playerWarDeck.concat(comWarDeck);
            for(const card of toCon)
                playerDeck.push(card);
            playerWarDeck = [];
            comWarDeck = [];
            } else {
              text.innerText = "Congrats You got the card" 
              // document.getElementById("won").style.visibility= "visible"
               
             }
    } else if (isRoundWinner(playerCard,computerCard) === 'war') {
        text.innerText = "War!"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
        if(playerDeck.numberOfCards > 4 && computerDeck.numberOfCards > 4)
            warAction(); 
    } else if (isRoundWinner(playerCard,computerCard) === 'lose'){
      computerDeck.push(playerCard)
        computerDeck.push(computerCard)
        if(comWarDeck.length > 0 && playerWarDeck.length > 0){
          text.innerText = `You lost ${playerWarDeck.length + 1} cards`
        let toCon = playerWarDeck.concat(comWarDeck);
        for(const card of toCon)
            computerDeck.push(card); 
        playerWarDeck = [];
        comWarDeck = [];
    } else {
      text.innerText = "You lost the card"
        
    }
  }
    
  if (isGameOver(playerDeck)) {
    updateDeckCount()
      text.innerText = "You Lose!!"
      modalPopup("You Lose!!");
      stop = true
    } else if (isGameOver(computerDeck)) {
    updateDeckCount()
      text.innerText = "You Win!!"
      modalPopup("You Win!!");
      stop = true
    }
    
  }

  function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
  }
  
  function isRoundWinner(cardOne, cardTwo) {
    if(CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value])
        return "win"
    else if(CARD_VALUE_MAP[cardOne.value] < CARD_VALUE_MAP[cardTwo.value])
        return "lose"
    else
        return "war"
  }
  
  function isGameOver(deck) {
    return deck.numberOfCards === 0
  }

function warAction () {
    inRound = true;
    let i = 0;
    let cCard = {};
    let pCard = {};
    
        while(i < 4) {
          cCard = computerDeck.pop();
          pCard = playerDeck.pop();
          playerWarDeck.push(pCard)
          comWarDeck.push(cCard);
          i++;
        }
    return
 }

$('#play-again-btn').on('click', handlePlayAgainButton)

$('#exit-btn').on('click', handleExitGameButton)

$('.instructionsButton').on('click', handleInstructionsButton)

$('.aboutButton').on('click', handleAboutButton)