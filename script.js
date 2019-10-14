class Deck {
  constructor() {
    this.deckLength = 52;

    this.deck = []; //LOCAL VARIABLE

    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = {
          Value: values[x],
          Suit: suits[i], //CREATION OF THE ACTUAL OBJECT(PULLED THIS IDEA FROM "THATSOFTWAREDUDE.COM")
          Rank: rank[x]
        };
        this.deck.push(card); //PUSHING THE CARD INSIDE THE DECK ARRAY
      }
    } //ARRAY OF POINTS OF CARDS
  }
  shufflerMaster() {
    let bigNum = Math.floor(Math.random() * 5100);
    const { deck } = this; //got this from wsvincet

    while (bigNum != 1) {
      bigNum -= 1;
      let scrambler1 = Math.floor(Math.random() * 52);
      let scrambler2 = Math.floor(Math.random() * 52);
      let temperary = deck[scrambler1];
      deck[scrambler1] = deck[scrambler2];
      deck[scrambler2] = temperary;
    }
    return this;
  }
}
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS

class Game {
  constructor(lucky1, luck2) {}

  //END OF FUNCTION
  //END OF FUNCTION
  // console.log(player1); NOT REVLANT
  // console.log(player2);

  playTheGame() {
    if (player1[player1.length - 1].Rank > player2[player2.length - 1].Rank) {
      console.log("PLAYER1 WON");
      player1.unshift(player2.pop());
      player1.unshift(player1.pop());
    } else if (
      player1[player1.length - 1].Rank < player2[player2.length - 1].Rank
    ) {
      console.log("PLAYER 2 WON!");
      player2.unshift(player2.pop());
      player2.unshift(player1.pop());
    } else {
      this.war();
    }
  }

  war() {
    console.log("WARWARWARWARWARWAR!!!!!");
    if (player1[player1.length - 2] > player2[player2.length - 2]) {
      player1.unshift(player2[player2.length - 2]);
      player1.unshift(player2[player2.length - 1]);
      player2.pop();
      player2.pop();
    } else {
      player2.unshift(player1[player1.length - 2]);
      player2.unshift(player1[player1.length - 1]);
      player1.pop();
      player1.pop();
    }
  } //ends war function

  loop() {
    while (player1.length != 0 && player2.length != 0) {
      console.log("player1sDeckIs " + player1.length);
      console.log("player2DeckIs " + player2.length);

      this.playTheGame();
    }
  }
}

const Deck1 = new Deck();
Deck1.shufflerMaster();
let player1 = Deck1.deck.slice(0, 26);
let player2 = Deck1.deck.slice(26, 52);
console.log(player1);
console.log(player2);

const Game2 = new Game();
Game2.loop();
console.log(Game2);
